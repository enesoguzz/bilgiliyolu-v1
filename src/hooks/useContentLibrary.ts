import { useCallback, useEffect, useMemo, useState } from 'react';
import { mergeQuestions, mergeSlides, mergeUnits, questions, slides, units } from '@/data/curriculum';
import { Question, TopicSlide, Unit } from '@/types/curriculum';
import { supabase } from '@/lib/supabase';

type UnitRow = {
  id: string;
  subject_id: string;
  grade_id: number;
  order_index: number;
  title: string;
  description: string;
  is_published: boolean;
};

type SlideRow = {
  id: string;
  unit_id: string;
  order_index: number;
  title: string;
  content: string;
  example: string | null;
  is_published: boolean;
};

type QuestionRow = {
  id: string;
  unit_id: string;
  text: string;
  options: string[] | unknown;
  correct_index: number;
  explanation: string;
  is_published: boolean;
};

function rowToUnit(row: UnitRow): Unit {
  return {
    id: row.id,
    subjectId: row.subject_id,
    gradeId: row.grade_id,
    order: row.order_index,
    title: row.title,
    description: row.description,
  };
}

function rowToSlide(row: SlideRow): TopicSlide {
  return {
    id: row.id,
    unitId: row.unit_id,
    order: row.order_index,
    title: row.title,
    content: row.content,
    example: row.example ?? undefined,
  };
}

function rowToQuestion(row: QuestionRow): Question {
  return {
    id: row.id,
    unitId: row.unit_id,
    text: row.text,
    options: Array.isArray(row.options) ? row.options.map(String) : [],
    correctIndex: row.correct_index,
    explanation: row.explanation,
  };
}

export function useContentLibrary(isAuthenticated: boolean) {
  const [remoteUnits, setRemoteUnits] = useState<Unit[]>([]);
  const [remoteSlides, setRemoteSlides] = useState<TopicSlide[]>([]);
  const [remoteQuestions, setRemoteQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshContent = useCallback(async () => {
    if (!supabase || !isAuthenticated) {
      setRemoteUnits([]);
      setRemoteSlides([]);
      setRemoteQuestions([]);
      return;
    }

    setLoading(true);
    setError(null);

    const [unitResult, slideResult, questionResult] = await Promise.all([
      supabase
        .from('content_units')
        .select('id, subject_id, grade_id, order_index, title, description, is_published')
        .order('grade_id')
        .order('subject_id')
        .order('order_index'),
      supabase
        .from('content_slides')
        .select('id, unit_id, order_index, title, content, example, is_published')
        .order('unit_id')
        .order('order_index'),
      supabase
        .from('content_questions')
        .select('id, unit_id, text, options, correct_index, explanation, is_published')
        .order('unit_id')
        .order('id'),
    ]);

    const failure = unitResult.error ?? slideResult.error ?? questionResult.error;

    if (failure) {
      setError(failure.message);
      setLoading(false);
      return;
    }

    setRemoteUnits(((unitResult.data ?? []) as UnitRow[]).map(rowToUnit));
    setRemoteSlides(((slideResult.data ?? []) as SlideRow[]).map(rowToSlide));
    setRemoteQuestions(((questionResult.data ?? []) as QuestionRow[]).map(rowToQuestion));
    setLoading(false);
  }, [isAuthenticated]);

  useEffect(() => {
    refreshContent();
  }, [refreshContent]);

  const merged = useMemo(() => ({
    units: mergeUnits(remoteUnits),
    slides: mergeSlides(remoteSlides),
    questions: mergeQuestions(remoteQuestions),
    remoteUnits,
    remoteSlides,
    remoteQuestions,
  }), [remoteQuestions, remoteSlides, remoteUnits]);

  return {
    ...merged,
    loading,
    error,
    refreshContent,
    hasRemoteContent: remoteUnits.length > 0 || remoteSlides.length > 0 || remoteQuestions.length > 0,
    defaults: {
      units,
      slides,
      questions,
    },
  };
}
