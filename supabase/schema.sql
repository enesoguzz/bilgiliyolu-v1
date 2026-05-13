create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  grade_id integer default 0,
  is_admin boolean not null default false,
  is_pro boolean not null default false,
  subscription_status text not null default 'free',
  pro_expires_at timestamptz,
  mascot text not null default 'Keçi',
  accessory text not null default 'Gözlük',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles
  add column if not exists is_admin boolean not null default false;

alter table public.profiles
  add column if not exists is_pro boolean not null default false;

alter table public.profiles
  add column if not exists subscription_status text not null default 'free';

alter table public.profiles
  add column if not exists pro_expires_at timestamptz;

alter table public.profiles
  add column if not exists mascot text not null default 'Keçi';

alter table public.profiles
  add column if not exists accessory text not null default 'Gözlük';

create table if not exists public.user_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  grade_id integer not null default 0,
  completed_units text[] not null default '{}',
  unit_scores jsonb not null default '{}',
  current_unit text,
  updated_at timestamptz not null default now()
);

create table if not exists public.content_units (
  id text primary key,
  subject_id text not null,
  grade_id integer not null,
  order_index integer not null default 1,
  title text not null,
  description text not null default '',
  is_published boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.content_slides (
  id text primary key,
  unit_id text not null,
  order_index integer not null default 1,
  title text not null,
  content text not null,
  example text,
  is_published boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.content_questions (
  id text primary key,
  unit_id text not null,
  text text not null,
  options jsonb not null,
  correct_index integer not null default 0,
  explanation text not null default '',
  is_published boolean not null default true,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.user_progress enable row level security;
alter table public.content_units enable row level security;
alter table public.content_slides enable row level security;
alter table public.content_questions enable row level security;

create or replace function public.is_admin()
returns boolean as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and is_admin = true
  );
$$ language sql stable security definer;

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

revoke insert, update on public.profiles from authenticated;
grant insert (id, email, display_name, grade_id, mascot, accessory) on public.profiles to authenticated;
grant update (email, display_name, grade_id, mascot, accessory) on public.profiles to authenticated;
grant select on public.profiles to authenticated;

drop policy if exists "Users can read own progress" on public.user_progress;
create policy "Users can read own progress"
  on public.user_progress for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own progress" on public.user_progress;
create policy "Users can insert own progress"
  on public.user_progress for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update own progress" on public.user_progress;
create policy "Users can update own progress"
  on public.user_progress for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users can read published units" on public.content_units;
create policy "Users can read published units"
  on public.content_units for select
  using (is_published = true or public.is_admin());

drop policy if exists "Admins can manage units" on public.content_units;
create policy "Admins can manage units"
  on public.content_units for all
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Users can read published slides" on public.content_slides;
create policy "Users can read published slides"
  on public.content_slides for select
  using (is_published = true or public.is_admin());

drop policy if exists "Admins can manage slides" on public.content_slides;
create policy "Admins can manage slides"
  on public.content_slides for all
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Users can read published questions" on public.content_questions;
create policy "Users can read published questions"
  on public.content_questions for select
  using (is_published = true or public.is_admin());

drop policy if exists "Admins can manage questions" on public.content_questions;
create policy "Admins can manage questions"
  on public.content_questions for all
  using (public.is_admin())
  with check (public.is_admin());

create or replace function public.touch_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists touch_profiles_updated_at on public.profiles;
create trigger touch_profiles_updated_at
  before update on public.profiles
  for each row execute function public.touch_updated_at();

drop trigger if exists touch_user_progress_updated_at on public.user_progress;
create trigger touch_user_progress_updated_at
  before update on public.user_progress
  for each row execute function public.touch_updated_at();

drop trigger if exists touch_content_units_updated_at on public.content_units;
create trigger touch_content_units_updated_at
  before update on public.content_units
  for each row execute function public.touch_updated_at();

drop trigger if exists touch_content_slides_updated_at on public.content_slides;
create trigger touch_content_slides_updated_at
  before update on public.content_slides
  for each row execute function public.touch_updated_at();

drop trigger if exists touch_content_questions_updated_at on public.content_questions;
create trigger touch_content_questions_updated_at
  before update on public.content_questions
  for each row execute function public.touch_updated_at();
