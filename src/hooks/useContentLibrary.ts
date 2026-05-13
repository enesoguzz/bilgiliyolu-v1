import { useCallback, useEffect, useMemo, useState } from 'react';
import { mergeUnits } from '@/data/curriculum';
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
    isPublished: row.is_published,
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
    isPublished: row.is_published,
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
    isPublished: row.is_published,
  };
}

type RefreshContentOptions = {
  includeAll?: boolean;
};

export function useContentLibrary(isAuthenticated: boolean) {
  const [remoteUnits, setRemoteUnits] = useState<Unit[]>([]);
  const [remoteSlides, setRemoteSlides] = useState<TopicSlide[]>([]);
  const [remoteQuestions, setRemoteQuestions] = useState<Question[]>([]);
  const [loadedUnitIds, setLoadedUnitIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshContent = useCallback(async (options: RefreshContentOptions = {}) => {
    if (!supabase || !isAuthenticated) {
      setRemoteUnits([]);
      setRemoteSlides([]);
      setRemoteQuestions([]);
      setLoadedUnitIds([]);
      return;
    }

    setLoading(true);
    setError(null);

    const unitResult = await supabase
      .from('content_units')
      .select('id, subject_id, grade_id, order_index, title, description, is_published')
      .order('grade_id')
      .order('subject_id')
      .order('order_index');

    if (unitResult.error) {
      setError(unitResult.error.message);
      setLoading(false);
      return;
    }

    setRemoteUnits(((unitResult.data ?? []) as UnitRow[]).map(rowToUnit));

    if (!options.includeAll) {
      setLoading(false);
      return;
    }

    const [slideResult, questionResult] = await Promise.all([
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

    const failure = slideResult.error ?? questionResult.error;

    if (failure) {
      setError(failure.message);
      setLoading(false);
      return;
    }

    setRemoteSlides(((slideResult.data ?? []) as SlideRow[]).map(rowToSlide));
    setRemoteQuestions(((questionResult.data ?? []) as QuestionRow[]).map(rowToQuestion));
    setLoadedUnitIds(Array.from(new Set([
      ...((slideResult.data ?? []) as SlideRow[]).map(row => row.unit_id),
      ...((questionResult.data ?? []) as QuestionRow[]).map(row => row.unit_id),
    ])));
    setLoading(false);
  }, [isAuthenticated]);

  const loadUnitContent = useCallback(async (unitId: string) => {
    if (!supabase || !isAuthenticated || loadedUnitIds.includes(unitId)) return;

    setLoading(true);
    setError(null);

    const [slideResult, questionResult] = await Promise.all([
      supabase
        .from('content_slides')
        .select('id, unit_id, order_index, title, content, example, is_published')
        .eq('unit_id', unitId)
        .order('order_index'),
      supabase
        .from('content_questions')
        .select('id, unit_id, text, options, correct_index, explanation, is_published')
        .eq('unit_id', unitId)
        .order('id'),
    ]);

    const failure = slideResult.error ?? questionResult.error;

    if (failure) {
      setError(failure.message);
      setLoading(false);
      return;
    }

    setRemoteSlides(previous => [
      ...previous.filter(slide => slide.unitId !== unitId),
      ...((slideResult.data ?? []) as SlideRow[]).map(rowToSlide),
    ]);
    setRemoteQuestions(previous => [
      ...previous.filter(question => question.unitId !== unitId),
      ...((questionResult.data ?? []) as QuestionRow[]).map(rowToQuestion),
    ]);
    setLoadedUnitIds(previous => previous.includes(unitId) ? previous : [...previous, unitId]);
    setLoading(false);
  }, [isAuthenticated, loadedUnitIds]);

  useEffect(() => {
    refreshContent();
  }, [refreshContent]);

  const merged = useMemo(() => ({
    units: mergeUnits(remoteUnits),
    remoteUnits,
    remoteSlides,
    remoteQuestions,
  }), [remoteQuestions, remoteSlides, remoteUnits]);

  return {
    ...merged,
    loading,
    error,
    refreshContent,
    loadUnitContent,
    loadedUnitIds,
    hasRemoteContent: remoteUnits.length > 0 || remoteSlides.length > 0 || remoteQuestions.length > 0,
  };
}
