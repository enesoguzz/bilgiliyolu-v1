import { FormEvent, useMemo, useState } from 'react';
import { ArrowLeft, Check, FileQuestion, Layers, Plus, Presentation } from 'lucide-react';
import { subjects } from '@/data/curriculum';
import { Question, TopicSlide, Unit } from '@/types/curriculum';
import { supabase } from '@/lib/supabase';

type AdminTab = 'units' | 'slides' | 'questions';

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
};

const emptySlide: TopicSlide = {
  id: '',
  unitId: '',
  order: 1,
  title: '',
  content: '',
  example: '',
};

const emptyQuestion: Question = {
  id: '',
  unitId: '',
  text: '',
  options: ['', '', '', ''],
  correctIndex: 0,
  explanation: '',
};

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
  const [tab, setTab] = useState<AdminTab>('units');
  const [unitForm, setUnitForm] = useState<Unit>(emptyUnit);
  const [slideForm, setSlideForm] = useState<TopicSlide>(emptySlide);
  const [questionForm, setQuestionForm] = useState<Question>(emptyQuestion);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const orderedUnits = useMemo(
    () => [...units].sort((a, b) => a.gradeId - b.gradeId || a.subjectId.localeCompare(b.subjectId) || a.order - b.order),
    [units],
  );

  const saveUnit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;

    setSaving(true);
    setError(null);
    setMessage(null);

    const id = unitForm.id || `${unitForm.subjectId}-${unitForm.gradeId}-${slugify(unitForm.title)}`;
    const { error: saveError } = await supabase.from('content_units').upsert({
      id,
      subject_id: unitForm.subjectId,
      grade_id: unitForm.gradeId,
      order_index: unitForm.order,
      title: unitForm.title,
      description: unitForm.description,
      is_published: true,
    });

    setSaving(false);

    if (saveError) {
      setError(saveError.message);
      return;
    }

    setUnitForm(emptyUnit);
    setMessage('Ünite kaydedildi.');
    await onRefresh();
  };

  const saveSlide = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;

    setSaving(true);
    setError(null);
    setMessage(null);

    const id = slideForm.id || `${slideForm.unitId}-s${slideForm.order}`;
    const { error: saveError } = await supabase.from('content_slides').upsert({
      id,
      unit_id: slideForm.unitId,
      order_index: slideForm.order,
      title: slideForm.title,
      content: slideForm.content,
      example: slideForm.example || null,
      is_published: true,
    });

    setSaving(false);

    if (saveError) {
      setError(saveError.message);
      return;
    }

    setSlideForm(emptySlide);
    setMessage('Slayt kaydedildi.');
    await onRefresh();
  };

  const saveQuestion = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;

    setSaving(true);
    setError(null);
    setMessage(null);

    const id = questionForm.id || `${questionForm.unitId}-q${Date.now()}`;
    const options = questionForm.options.map(option => option.trim()).filter(Boolean);
    const { error: saveError } = await supabase.from('content_questions').upsert({
      id,
      unit_id: questionForm.unitId,
      text: questionForm.text,
      options,
      correct_index: questionForm.correctIndex,
      explanation: questionForm.explanation,
      is_published: true,
    });

    setSaving(false);

    if (saveError) {
      setError(saveError.message);
      return;
    }

    setQuestionForm(emptyQuestion);
    setMessage('Soru kaydedildi.');
    await onRefresh();
  };

  return (
    <div className="min-h-screen bg-background px-4 py-6 safe-bottom">
      <div className="max-w-sm mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <button
            type="button"
            onClick={onBack}
            className="p-2 -ml-2 rounded-xl hover:bg-muted active:scale-95 transition-all"
            aria-label="Geri dön"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <div>
            <h1 className="text-xl font-extrabold text-foreground">Admin Panel</h1>
            <p className="text-xs text-muted-foreground">İçerik üret ve mevcut içerikleri güncelle</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 bg-muted p-1 rounded-xl mb-4">
          {[
            { id: 'units' as const, label: 'Ünite', icon: Layers },
            { id: 'slides' as const, label: 'Slayt', icon: Presentation },
            { id: 'questions' as const, label: 'Soru', icon: FileQuestion },
          ].map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`rounded-lg py-2 text-xs font-bold transition-all flex items-center justify-center gap-1 ${tab === item.id ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'}`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </div>

        {message && (
          <p className="mb-3 rounded-xl bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">{message}</p>
        )}
        {error && (
          <p className="mb-3 rounded-xl bg-destructive/10 px-3 py-2 text-xs font-semibold text-destructive">{error}</p>
        )}

        {tab === 'units' && (
          <form onSubmit={saveUnit} className="rounded-2xl border border-border bg-card p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="text-xs font-bold text-muted-foreground">Ders</span>
                <select
                  value={unitForm.subjectId}
                  onChange={event => setUnitForm(value => ({ ...value, subjectId: event.target.value }))}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-3 text-sm"
                >
                  {subjects.map(subject => (
                    <option key={subject.id} value={subject.id}>{subject.name}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-bold text-muted-foreground">Sınıf</span>
                <input
                  type="number"
                  min={1}
                  max={8}
                  value={unitForm.gradeId}
                  onChange={event => setUnitForm(value => ({ ...value, gradeId: Number(event.target.value) }))}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-3 text-sm"
                />
              </label>
            </div>
            <TextInput label="Ünite ID" value={unitForm.id} onChange={id => setUnitForm(value => ({ ...value, id }))} placeholder="Boş bırakılırsa otomatik oluşur" />
            <TextInput label="Başlık" value={unitForm.title} onChange={title => setUnitForm(value => ({ ...value, title }))} required />
            <TextArea label="Açıklama" value={unitForm.description} onChange={description => setUnitForm(value => ({ ...value, description }))} required />
            <NumberInput label="Sıra" value={unitForm.order} onChange={order => setUnitForm(value => ({ ...value, order }))} />
            <SubmitButton saving={saving} label="Üniteyi Kaydet" />
          </form>
        )}

        {tab === 'slides' && (
          <form onSubmit={saveSlide} className="rounded-2xl border border-border bg-card p-4 space-y-3">
            <UnitSelect units={orderedUnits} value={slideForm.unitId} onChange={unitId => setSlideForm(value => ({ ...value, unitId }))} />
            <TextInput label="Slayt ID" value={slideForm.id} onChange={id => setSlideForm(value => ({ ...value, id }))} placeholder="Boş bırakılırsa otomatik oluşur" />
            <TextInput label="Başlık" value={slideForm.title} onChange={title => setSlideForm(value => ({ ...value, title }))} required />
            <TextArea label="İçerik" value={slideForm.content} onChange={content => setSlideForm(value => ({ ...value, content }))} required rows={5} />
            <TextArea label="Örnek" value={slideForm.example ?? ''} onChange={example => setSlideForm(value => ({ ...value, example }))} rows={3} />
            <NumberInput label="Sıra" value={slideForm.order} onChange={order => setSlideForm(value => ({ ...value, order }))} />
            <SubmitButton saving={saving} label="Slaytı Kaydet" />
          </form>
        )}

        {tab === 'questions' && (
          <form onSubmit={saveQuestion} className="rounded-2xl border border-border bg-card p-4 space-y-3">
            <UnitSelect units={orderedUnits} value={questionForm.unitId} onChange={unitId => setQuestionForm(value => ({ ...value, unitId }))} />
            <TextInput label="Soru ID" value={questionForm.id} onChange={id => setQuestionForm(value => ({ ...value, id }))} placeholder="Boş bırakılırsa otomatik oluşur" />
            <TextArea label="Soru metni" value={questionForm.text} onChange={text => setQuestionForm(value => ({ ...value, text }))} required rows={4} />
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
            <label className="block">
              <span className="text-xs font-bold text-muted-foreground">Doğru seçenek</span>
              <select
                value={questionForm.correctIndex}
                onChange={event => setQuestionForm(value => ({ ...value, correctIndex: Number(event.target.value) }))}
                className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-3 text-sm"
              >
                {questionForm.options.map((_option, index) => (
                  <option key={index} value={index}>Seçenek {index + 1}</option>
                ))}
              </select>
            </label>
            <TextArea label="Açıklama" value={questionForm.explanation} onChange={explanation => setQuestionForm(value => ({ ...value, explanation }))} required rows={3} />
            <SubmitButton saving={saving} label="Soruyu Kaydet" />
          </form>
        )}

        <div className="mt-5 rounded-2xl border border-border bg-card p-4">
          <h2 className="text-sm font-extrabold text-foreground mb-2">Supabase içerikleri</h2>
          <p className="text-xs text-muted-foreground">
            {remoteUnits.length} ünite, {remoteSlides.length} slayt, {remoteQuestions.length} soru yönetiliyor.
          </p>
          <div className="mt-3 space-y-2 max-h-72 overflow-y-auto pr-1">
            {tab === 'units' && remoteUnits.map(unit => (
              <button
                key={unit.id}
                type="button"
                onClick={() => setUnitForm(unit)}
                className="w-full rounded-xl border border-border bg-background p-3 text-left active:scale-[0.99] transition-all"
              >
                <span className="block text-xs font-bold text-foreground">{unit.title}</span>
                <span className="block text-[11px] text-muted-foreground mt-0.5">{unit.id}</span>
              </button>
            ))}
            {tab === 'slides' && remoteSlides.map(slide => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setSlideForm(slide)}
                className="w-full rounded-xl border border-border bg-background p-3 text-left active:scale-[0.99] transition-all"
              >
                <span className="block text-xs font-bold text-foreground">{slide.title}</span>
                <span className="block text-[11px] text-muted-foreground mt-0.5">{slide.id}</span>
              </button>
            ))}
            {tab === 'questions' && remoteQuestions.map(question => (
              <button
                key={question.id}
                type="button"
                onClick={() => setQuestionForm({
                  ...question,
                  options: [
                    question.options[0] ?? '',
                    question.options[1] ?? '',
                    question.options[2] ?? '',
                    question.options[3] ?? '',
                  ],
                })}
                className="w-full rounded-xl border border-border bg-background p-3 text-left active:scale-[0.99] transition-all"
              >
                <span className="block text-xs font-bold text-foreground">{question.text}</span>
                <span className="block text-[11px] text-muted-foreground mt-0.5">{question.id}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
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
      <span className="text-xs font-bold text-muted-foreground">{label}</span>
      <input
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
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
      <span className="text-xs font-bold text-muted-foreground">{label}</span>
      <textarea
        value={value}
        onChange={event => onChange(event.target.value)}
        required={required}
        rows={rows}
        className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-ring resize-none"
      />
    </label>
  );
}

function NumberInput({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-muted-foreground">{label}</span>
      <input
        type="number"
        min={1}
        value={value}
        onChange={event => onChange(Number(event.target.value))}
        className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}

function UnitSelect({ units, value, onChange }: { units: Unit[]; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-muted-foreground">Ünite</span>
      <select
        value={value}
        onChange={event => onChange(event.target.value)}
        required
        className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-3 text-sm"
      >
        <option value="">Ünite seç</option>
        {units.map(unit => (
          <option key={unit.id} value={unit.id}>
            {unit.gradeId}. sınıf / {unit.subjectId} / {unit.title}
          </option>
        ))}
      </select>
    </label>
  );
}

function SubmitButton({ saving, label }: { saving: boolean; label: string }) {
  return (
    <button
      type="submit"
      disabled={saving}
      className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-2xl text-base active:scale-[0.98] transition-all shadow-lg shadow-primary/20 disabled:opacity-60 flex items-center justify-center gap-2"
    >
      {saving ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      {saving ? 'Kaydediliyor...' : label}
    </button>
  );
}
