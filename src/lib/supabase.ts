import { createClient } from '@supabase/supabase-js';

function cleanEnvValue(value: string | undefined): string {
  return (value ?? '').trim().replace(/,+$/, '');
}

const supabaseUrl = cleanEnvValue(import.meta.env.VITE_SUPABASE_URL as string | undefined);
const supabaseAnonKey = cleanEnvValue(import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  })
  : null;
