import type { OptionType } from '@components/SelectList';
import type { Exercise } from './Exercise.types';

export const mapExerciseToOption = (exercise: Exercise): OptionType => ({
	value: exercise.id,
	label: exercise.name,
});
