import { FormEvent, ReactNode, useMemo, useState } from 'react';
import {
  ArrowLeft,
  Check,
  Eye,
  EyeOff,
  FileQuestion,
  Layers,
  Plus,
  Presentation,
  RefreshCw,
  Search,
  Trash2,
} from 'lucide-react';
import { subjects } from '@/data/curriculum';
import { Question, TopicSlide, Unit } from '@/types/curriculum';
import { supabase } from '@/lib/supabase';

type AdminTab = 'overview' | 'units' | 'slides' | 'questions';

interface AdminPanelProps {
  units: Unit[];
  remoteUnits: Unit[];
  remoteSlides: TopicSlide[];
  remoteQuestions: Question[];
  onBack: () => void;
  onRefresh: () => Promise<void>;
}

const emptyUnit: Unit = {
  id: '',
  subjectId: 'matematik',
  gradeId: 5,
  order: 1,
  title: '',
  description: '',
  isPublished: true,
};

const emptySlide: TopicSlide = {
  id: '',
  unitId: '',
  order: 1,
  title: '',
  content: '',
  example: '',
  isPublished: true,
};

const emptyQuestion: Question = {
  id: '',
  unitId: '',
  text: '',
  options: ['', '', '', ''],
  correctIndex: 0,
  explanation: '',
  isPublished: true,
};

const subjectNames = Object.fromEntries(subjects.map(subject => [subject.id, subject.name]));

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function AdminPanel({
  units,
  remoteUnits,
  remoteSlides,
  remoteQuestions,
  onBack,
  onRefresh,
}: AdminPanelProps) {
  const [tab, setTab] = useState<AdminTab>('overview');
  const [unitForm, setUnitForm] = useState<Unit>(emptyUnit);
  const [slideForm, setSlideForm] = useState<TopicSlide>(emptySlide);
  const [questionForm, setQuestionForm] = useState<Question>(emptyQuestion);
  const [gradeFilter, setGradeFilter] = useState<number | 'all'>('all');
  const [subjectFilter, setSubjectFilter] = useState<string>('all');
  const [search, setSearch] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const orderedUnits = useMemo(
    () => [...units].sort((a, b) => a.gradeId - b.gradeId || a.subjectId.localeCompare(b.subjectId) || a.order - b.order),
    [units],
  );

  const filteredUnits = useMemo(() => {
    const term = search.trim().toLowerCase();
    return orderedUnits.filter(unit => {
      const matchesGrade = gradeFilter === 'all' || unit.gradeId === gradeFilter;
      const matchesSubject = subjectFilter === 'all' || unit.subjectId === subjectFilter;
      const matchesSearch = !term || `${unit.title} ${unit.description} ${unit.id}`.toLowerCase().includes(term);
      return matchesGrade && matchesSubject && matchesSearch;
    });
  }, [gradeFilter, orderedUnits, search, subjectFilter]);

  const filteredSlides = useMemo(() => {
    const term = search.trim().toLowerCase();
    return remoteSlides.filter(slide => {
      const unit = units.find(item => item.id === slide.unitId);
      const matchesGrade = gradeFilter === 'all' || unit?.gradeId === gradeFilter;
      const matchesSubject = subjectFilter === 'all' || unit?.subjectId === subjectFilter;
      const matchesSearch = !term || `${slide.title} ${slide.content} ${slide.id}`.toLowerCase().includes(term);
      return matchesGrade && matchesSubject && matchesSearch;
    });
  }, [gradeFilter, remoteSlides, search, subjectFilter, units]);

  const filteredQuestions = useMemo(() => {
    const term = search.trim().toLowerCase();
    return remoteQuestions.filter(question => {
      const unit = units.find(item => item.id === question.unitId);
      const matchesGrade = gradeFilter === 'all' || unit?.gradeId === gradeFilter;
      const matchesSubject = subjectFilter === 'all' || unit?.subjectId === subjectFilter;
      const matchesSearch = !term || `${question.text} ${question.explanation} ${question.id}`.toLowerCase().includes(term);
      return matchesGrade && matchesSubject && matchesSearch;
    });
  }, [gradeFilter, remoteQuestions, search, subjectFilter, units]);

  async function runSave<T>(action: () => Promise<{ error: { message: string } | null }>, successMessage: string, reset: () => void) {
    setSaving(true);
    setError(null);
    setMessage(null);

    const { error: saveError } = await action();
    setSaving(false);

    if (saveError) {
      setError(saveError.message);
      return;
    }

    reset();
    setMessage(successMessage);
    await onRefresh();
  }

  const saveUnit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;

    const id = unitForm.id || `${unitForm.subjectId}-${unitForm.gradeId}-${slugify(unitForm.title)}`;
    await runSave(
      () => supabase.from('content_units').upsert({
        id,
        subject_id: unitForm.subjectId,
        grade_id: unitForm.gradeId,
        order_index: unitForm.order,
        title: unitForm.title,
        description: unitForm.description,
        is_published: unitForm.isPublished ?? true,
      }),
      'Ünite kaydedildi.',
      () => setUnitForm(emptyUnit),
    );
  };

  const saveSlide = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;

    const id = slideForm.id || `${slideForm.unitId}-s${slideForm.order}`;
    await runSave(
      () => supabase.from('content_slides').upsert({
        id,
        unit_id: slideForm.unitId,
        order_index: slideForm.order,
        title: slideForm.title,
        content: slideForm.content,
        example: slideForm.example || null,
        is_published: slideForm.isPublished ?? true,
      }),
      'Slayt kaydedildi.',
      () => setSlideForm(emptySlide),
    );
  };

  const saveQuestion = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;

    const id = questionForm.id || `${questionForm.unitId}-q${Date.now()}`;
    const options = questionForm.options.map(option => option.trim()).filter(Boolean);
    await runSave(
      () => supabase.from('content_questions').upsert({
        id,
        unit_id: questionForm.unitId,
        text: questionForm.text,
        options,
        correct_index: questionForm.correctIndex,
        explanation: questionForm.explanation,
        is_published: questionForm.isPublished ?? true,
      }),
      'Soru kaydedildi.',
      () => setQuestionForm(emptyQuestion),
    );
  };

  const deleteContent = async (table: 'content_units' | 'content_slides' | 'content_questions', id: string) => {
    if (!supabase) return;
    if (!window.confirm('Bu içeriği silmek istediğine emin misin?')) return;

    setSaving(true);
    setError(null);
    setMessage(null);

    const { error: deleteError } = await supabase.from(table).delete().eq('id', id);
    setSaving(false);

    if (deleteError) {
      setError(deleteError.message);
      return;
    }

    setMessage('İçerik silindi.');
    await onRefresh();
  };

  return (
    <div className="min-h-screen bg-[#f7f3ef] text-[#1a1c1c]">
      <header className="sticky top-0 z-30 border-b border-[#ead9cf] bg-white/95 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c2b8] bg-[#fdf9f3] text-primary active:scale-95"
              aria-label="Uygulamaya dön"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-2xl font-extrabold text-primary">Keççi Yönetim Paneli</h1>
              <p className="text-xs font-bold uppercase tracking-wider text-[#8b7564]">İçerik, yayın ve soru yönetimi</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onRefresh}
            className="flex h-10 items-center gap-2 rounded-2xl border border-[#d9c2b8] bg-white px-4 text-sm font-extrabold text-primary active:scale-95"
          >
            <RefreshCw className="h-4 w-4" />
            Yenile
          </button>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-5 px-4 py-5 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-3">
          <nav className="rounded-3xl border border-[#e0d7d0] bg-white p-2 shadow-[0_4px_0_0_#e0d7d0]">
            {[
              { id: 'overview' as const, label: 'Özet', icon: Check },
              { id: 'units' as const, label: 'Üniteler', icon: Layers },
              { id: 'slides' as const, label: 'Slaytlar', icon: Presentation },
              { id: 'questions' as const, label: 'Sorular', icon: FileQuestion },
            ].map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`mb-1 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-extrabold transition-all ${
                  tab === item.id ? 'bg-[#ffddb9] text-primary' : 'text-[#6f584b] hover:bg-[#fdf9f3]'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </button>
            ))}
          </nav>

          <section className="rounded-3xl border border-[#e0d7d0] bg-white p-4 shadow-[0_4px_0_0_#e0d7d0]">
            <h2 className="mb-3 text-xs font-extrabold uppercase tracking-wider text-primary">Filtreler</h2>
            <div className="relative mb-3">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8b7564]" />
              <input
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder="İçerik ara"
                className="h-11 w-full rounded-2xl border border-[#d9c2b8] bg-[#fdf9f3] pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-[#ffb694]"
              />
            </div>
            <SelectInput label="Sınıf" value={String(gradeFilter)} onChange={value => setGradeFilter(value === 'all' ? 'all' : Number(value))}>
              <option value="all">Tüm sınıflar</option>
              {Array.from({ length: 8 }, (_, index) => index + 1).map(grade => (
                <option key={grade} value={grade}>{grade}. Sınıf</option>
              ))}
            </SelectInput>
            <SelectInput label="Ders" value={subjectFilter} onChange={setSubjectFilter}>
              <option value="all">Tüm dersler</option>
              {subjects.map(subject => (
                <option key={subject.id} value={subject.id}>{subject.name}</option>
              ))}
            </SelectInput>
          </section>
        </aside>

        <section className="min-w-0">
          {message && <p className="mb-3 rounded-2xl bg-[#e4ffd3] px-4 py-3 text-sm font-extrabold text-primary">{message}</p>}
          {error && <p className="mb-3 rounded-2xl bg-red-50 px-4 py-3 text-sm font-extrabold text-red-700">{error}</p>}

          {tab === 'overview' && (
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-3">
                <StatCard title="Yayındaki Ünite" value={remoteUnits.length} icon={<Layers className="h-6 w-6" />} />
                <StatCard title="Slayt" value={remoteSlides.length} icon={<Presentation className="h-6 w-6" />} />
                <StatCard title="Soru" value={remoteQuestions.length} icon={<FileQuestion className="h-6 w-6" />} />
              </div>
              <section className="rounded-3xl border border-[#e0d7d0] bg-white p-5 shadow-[0_4px_0_0_#e0d7d0]">
                <h2 className="text-xl font-extrabold text-primary">Hızlı Durum</h2>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {subjects.map(subject => {
                    const count = remoteUnits.filter(unit => unit.subjectId === subject.id).length;
                    return (
                      <div key={subject.id} className="rounded-2xl border border-[#ead9cf] bg-[#fdf9f3] p-4">
                        <p className="text-sm font-extrabold text-primary">{subject.name}</p>
                        <p className="text-xs font-semibold text-[#8b7564]">{count} uzaktan yönetilen ünite</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          )}

          {tab === 'units' && (
            <EditorLayout
              form={
                <form onSubmit={saveUnit} className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <SelectInput label="Ders" value={unitForm.subjectId} onChange={subjectId => setUnitForm(value => ({ ...value, subjectId }))}>
                      {subjects.map(subject => <option key={subject.id} value={subject.id}>{subject.name}</option>)}
                    </SelectInput>
                    <NumberInput label="Sınıf" min={1} max={8} value={unitForm.gradeId} onChange={gradeId => setUnitForm(value => ({ ...value, gradeId }))} />
                  </div>
                  <TextInput label="Ünite ID" value={unitForm.id} onChange={id => setUnitForm(value => ({ ...value, id }))} placeholder="Boş bırakılırsa otomatik oluşur" />
                  <TextInput label="Başlık" value={unitForm.title} onChange={title => setUnitForm(value => ({ ...value, title }))} required />
                  <TextArea label="Açıklama" value={unitForm.description} onChange={description => setUnitForm(value => ({ ...value, description }))} required />
                  <NumberInput label="Sıra" value={unitForm.order} onChange={order => setUnitForm(value => ({ ...value, order }))} />
                  <PublishToggle checked={unitForm.isPublished ?? true} onChange={isPublished => setUnitForm(value => ({ ...value, isPublished }))} />
                  <SubmitButton saving={saving} label="Üniteyi Kaydet" />
                </form>
              }
              list={filteredUnits.map(unit => (
                <ContentRow
                  key={unit.id}
                  title={unit.title}
                  meta={`${unit.gradeId}. sınıf / ${subjectNames[unit.subjectId] ?? unit.subjectId} / ${unit.id}`}
                  published={unit.isPublished ?? true}
                  onEdit={() => setUnitForm(unit)}
                  onDelete={() => deleteContent('content_units', unit.id)}
                />
              ))}
            />
          )}

          {tab === 'slides' && (
            <EditorLayout
              form={
                <form onSubmit={saveSlide} className="space-y-3">
                  <UnitSelect units={orderedUnits} value={slideForm.unitId} onChange={unitId => setSlideForm(value => ({ ...value, unitId }))} />
                  <TextInput label="Slayt ID" value={slideForm.id} onChange={id => setSlideForm(value => ({ ...value, id }))} placeholder="Boş bırakılırsa otomatik oluşur" />
                  <TextInput label="Başlık" value={slideForm.title} onChange={title => setSlideForm(value => ({ ...value, title }))} required />
                  <TextArea label="İçerik" value={slideForm.content} onChange={content => setSlideForm(value => ({ ...value, content }))} required rows={6} />
                  <TextArea label="Örnek" value={slideForm.example ?? ''} onChange={example => setSlideForm(value => ({ ...value, example }))} rows={3} />
                  <NumberInput label="Sıra" value={slideForm.order} onChange={order => setSlideForm(value => ({ ...value, order }))} />
                  <PublishToggle checked={slideForm.isPublished ?? true} onChange={isPublished => setSlideForm(value => ({ ...value, isPublished }))} />
                  <SubmitButton saving={saving} label="Slaytı Kaydet" />
                </form>
              }
              list={filteredSlides.map(slide => (
                <ContentRow
                  key={slide.id}
                  title={slide.title}
                  meta={`${unitLabel(units, slide.unitId)} / ${slide.id}`}
                  published={slide.isPublished ?? true}
                  onEdit={() => setSlideForm(slide)}
                  onDelete={() => deleteContent('content_slides', slide.id)}
                />
              ))}
            />
          )}

          {tab === 'questions' && (
            <EditorLayout
              form={
                <form onSubmit={saveQuestion} className="space-y-3">
                  <UnitSelect units={orderedUnits} value={questionForm.unitId} onChange={unitId => setQuestionForm(value => ({ ...value, unitId }))} />
                  <TextInput label="Soru ID" value={questionForm.id} onChange={id => setQuestionForm(value => ({ ...value, id }))} placeholder="Boş bırakılırsa otomatik oluşur" />
                  <TextArea label="Soru metni" value={questionForm.text} onChange={text => setQuestionForm(value => ({ ...value, text }))} required rows={4} />
                  <div className="grid gap-3 sm:grid-cols-2">
                    {questionForm.options.map((option, index) => (
                      <TextInput
                        key={index}
                        label={`Seçenek ${index + 1}`}
                        value={option}
                        onChange={nextOption => setQuestionForm(value => ({
                          ...value,
                          options: value.options.map((item, itemIndex) => itemIndex === index ? nextOption : item),
                        }))}
                        required
                      />
                    ))}
                  </div>
                  <SelectInput label="Doğru seçenek" value={String(questionForm.correctIndex)} onChange={correctIndex => setQuestionForm(value => ({ ...value, correctIndex: Number(correctIndex) }))}>
                    {questionForm.options.map((_option, index) => (
                      <option key={index} value={index}>Seçenek {index + 1}</option>
                    ))}
                  </SelectInput>
                  <TextArea label="Açıklama" value={questionForm.explanation} onChange={explanation => setQuestionForm(value => ({ ...value, explanation }))} required rows={3} />
                  <PublishToggle checked={questionForm.isPublished ?? true} onChange={isPublished => setQuestionForm(value => ({ ...value, isPublished }))} />
                  <SubmitButton saving={saving} label="Soruyu Kaydet" />
                </form>
              }
              list={filteredQuestions.map(question => (
                <ContentRow
                  key={question.id}
                  title={question.text}
                  meta={`${unitLabel(units, question.unitId)} / ${question.id}`}
                  published={question.isPublished ?? true}
                  onEdit={() => setQuestionForm({
                    ...question,
                    options: [
                      question.options[0] ?? '',
                      question.options[1] ?? '',
                      question.options[2] ?? '',
                      question.options[3] ?? '',
                    ],
                  })}
                  onDelete={() => deleteContent('content_questions', question.id)}
                />
              ))}
            />
          )}
        </section>
      </main>
    </div>
  );
}

function unitLabel(units: Unit[], unitId: string): string {
  const unit = units.find(item => item.id === unitId);
  if (!unit) return unitId;
  return `${unit.gradeId}. sınıf / ${subjectNames[unit.subjectId] ?? unit.subjectId} / ${unit.title}`;
}

function StatCard({ title, value, icon }: { title: string; value: number; icon: ReactNode }) {
  return (
    <section className="rounded-3xl border border-[#e0d7d0] bg-white p-5 shadow-[0_4px_0_0_#e0d7d0]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#8b7564]">{title}</p>
          <p className="mt-1 text-3xl font-extrabold text-primary">{value}</p>
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffddb9] text-primary">{icon}</span>
      </div>
    </section>
  );
}

function EditorLayout({ form, list }: { form: ReactNode; list: ReactNode[] }) {
  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
      <section className="rounded-3xl border border-[#e0d7d0] bg-white p-5 shadow-[0_4px_0_0_#e0d7d0]">
        {form}
      </section>
      <section className="rounded-3xl border border-[#e0d7d0] bg-white p-4 shadow-[0_4px_0_0_#e0d7d0]">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-primary">İçerik Listesi</h2>
          <span className="rounded-full bg-[#fdf9f3] px-3 py-1 text-xs font-extrabold text-[#8b7564]">{list.length}</span>
        </div>
        <div className="max-h-[68vh] space-y-2 overflow-y-auto pr-1">
          {list.length ? list : <p className="rounded-2xl bg-[#fdf9f3] p-4 text-sm font-semibold text-[#8b7564]">Bu filtrelerle içerik bulunamadı.</p>}
        </div>
      </section>
    </div>
  );
}

function ContentRow({
  title,
  meta,
  published,
  onEdit,
  onDelete,
}: {
  title: string;
  meta: string;
  published: boolean;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <article className="rounded-2xl border border-[#ead9cf] bg-[#fdf9f3] p-3">
      <button type="button" onClick={onEdit} className="block w-full text-left active:scale-[0.99]">
        <span className="line-clamp-2 text-sm font-extrabold text-primary">{title}</span>
        <span className="mt-1 block text-[11px] font-semibold text-[#8b7564]">{meta}</span>
      </button>
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-extrabold uppercase ${published ? 'bg-[#e4ffd3] text-primary' : 'bg-[#eee] text-[#605e5a]'}`}>
          {published ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
          {published ? 'Yayında' : 'Taslak'}
        </span>
        <button type="button" onClick={onDelete} className="flex h-8 w-8 items-center justify-center rounded-full border border-red-100 bg-white text-red-700 active:scale-95" aria-label="Sil">
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </article>
  );
}

function TextInput({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-extrabold uppercase tracking-wider text-[#8b7564]">{label}</span>
      <input
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-1 h-12 w-full rounded-2xl border border-[#d9c2b8] bg-[#fdf9f3] px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffb694]"
      />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  required,
  rows = 4,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="text-xs font-extrabold uppercase tracking-wider text-[#8b7564]">{label}</span>
      <textarea
        value={value}
        onChange={event => onChange(event.target.value)}
        required={required}
        rows={rows}
        className="mt-1 w-full rounded-2xl border border-[#d9c2b8] bg-[#fdf9f3] px-3 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-[#ffb694]"
      />
    </label>
  );
}

function NumberInput({
  label,
  value,
  onChange,
  min = 1,
  max,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <label className="block">
      <span className="text-xs font-extrabold uppercase tracking-wider text-[#8b7564]">{label}</span>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={event => onChange(Number(event.target.value))}
        className="mt-1 h-12 w-full rounded-2xl border border-[#d9c2b8] bg-[#fdf9f3] px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffb694]"
      />
    </label>
  );
}

function SelectInput({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <label className="mb-3 block">
      <span className="text-xs font-extrabold uppercase tracking-wider text-[#8b7564]">{label}</span>
      <select
        value={value}
        onChange={event => onChange(event.target.value)}
        className="mt-1 h-12 w-full rounded-2xl border border-[#d9c2b8] bg-[#fdf9f3] px-3 text-sm outline-none focus:ring-2 focus:ring-[#ffb694]"
      >
        {children}
      </select>
    </label>
  );
}

function UnitSelect({ units, value, onChange }: { units: Unit[]; value: string; onChange: (value: string) => void }) {
  return (
    <SelectInput label="Ünite" value={value} onChange={onChange}>
      <option value="">Ünite seç</option>
      {units.map(unit => (
        <option key={unit.id} value={unit.id}>
          {unit.gradeId}. sınıf / {subjectNames[unit.subjectId] ?? unit.subjectId} / {unit.title}
        </option>
      ))}
    </SelectInput>
  );
}

function PublishToggle({ checked, onChange }: { checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-2xl border border-[#ead9cf] bg-[#fdf9f3] p-3">
      <span>
        <span className="block text-sm font-extrabold text-primary">Yayın durumu</span>
        <span className="block text-xs font-semibold text-[#8b7564]">{checked ? 'Öğrenciler görebilir' : 'Taslak olarak saklanır'}</span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={event => onChange(event.target.checked)}
        className="h-5 w-5 rounded border-[#d9c2b8] text-primary focus:ring-[#ffb694]"
      />
    </label>
  );
}

function SubmitButton({ saving, label }: { saving: boolean; label: string }) {
  return (
    <button
      type="submit"
      disabled={saving}
      className="flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-4 text-base font-extrabold text-white shadow-lg shadow-primary/15 transition-all active:scale-[0.98] disabled:opacity-60"
    >
      {saving ? <Check className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
      {saving ? 'Kaydediliyor...' : label}
    </button>
  );
}
