import { describe, expect, it } from 'vitest';
import {
  getQuestionsForUnit,
  getSlidesForUnit,
  getSubjectsForGrade,
  getUnitsForSubjectAndGrade,
  grades,
} from '@/data/curriculum';

describe('curriculum data', () => {
  it('provides at least one subject for every grade', () => {
    for (const grade of grades) {
      expect(getSubjectsForGrade(grade.id).length).toBeGreaterThan(0);
    }
  });

  it('provides units, slides, and questions for every available grade-subject pair', () => {
    for (const grade of grades) {
      for (const subject of getSubjectsForGrade(grade.id)) {
        const units = getUnitsForSubjectAndGrade(subject.id, grade.id);

        expect(units.length).toBeGreaterThanOrEqual(5);

        for (const unit of units) {
          expect(getSlidesForUnit(unit.id).length).toBeGreaterThanOrEqual(4);
          expect(getQuestionsForUnit(unit.id).length).toBeGreaterThanOrEqual(7);
        }
      }
    }
  });

  it('keeps question answer indexes valid', () => {
    for (const grade of grades) {
      for (const subject of getSubjectsForGrade(grade.id)) {
        for (const unit of getUnitsForSubjectAndGrade(subject.id, grade.id)) {
          for (const question of getQuestionsForUnit(unit.id)) {
            expect(question.options.length).toBeGreaterThan(1);
            expect(question.correctIndex).toBeGreaterThanOrEqual(0);
            expect(question.correctIndex).toBeLessThan(question.options.length);
          }
        }
      }
    }
  });
});
