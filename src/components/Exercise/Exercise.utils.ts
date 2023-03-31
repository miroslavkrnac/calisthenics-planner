import type { OptionType } from '@components/SelectList/SelectList.types';
import type { Exercise } from '@stores/exercises/store.types';

export const mapExerciseToOption = (exercise: Exercise): OptionType => ({
	value: exercise.id,
	label: exercise.name,
});
