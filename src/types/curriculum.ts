export type GradeLevel = 'primary' | 'middle';

export interface Grade {
  id: number; // 1-8
  level: GradeLevel;
  label: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string; // emoji
  color: string; // tailwind color class token
  grades: number[];
}

export interface Unit {
  id: string;
  subjectId: string;
  gradeId: number;
  order: number;
  title: string;
  description: string;
  isPublished?: boolean;
}

export interface TopicSlide {
  id: string;
  unitId: string;
  order: number;
  title: string;
  content: string;
  example?: string;
  isPublished?: boolean;
}

export interface Question {
  id: string;
  unitId: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  isPublished?: boolean;
}

export interface UserProgress {
  gradeId: number;
  completedUnits: string[];
  unitScores: Record<string, number>; // unitId -> best score %
  currentUnit: string | null;
}
