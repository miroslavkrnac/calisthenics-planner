import React, { useState } from 'react';
import { Text } from '@components/Text';
import { Page } from '@components/Page';
import { useSetEntityStateTitle } from '@hooks/useSetEntityStateTitle';
import { View, StyleSheet } from 'react-native';
import type { OptionType } from '@components/SelectList';
import { SelectList } from '@components/SelectList';
import { Icon } from '@components/Icon';
import { palette } from '@colors/palette';
import { getExercises } from '@components/ExercisesList/ExercisesList.utils';
import { mapExerciseToOption } from '@components/Exercise/Exercise.utils';
import { randomString } from '@utils';

const workout = {
	startDate: new Date(),
	endDate: new Date(),
	exercises: [
		{
			id: '1',
			name: 'Bench press',
			reps: [
				{
					id: 'sds',
					weight: 100,
					count: 20,
				},
			],
		},
	],
};

interface WorkoutRep {
	weight: number;
	count: number;
	id: string;
}

interface WorkoutExercise {
	id: string;
	name: string;
	reps: WorkoutRep[];
}

const ModalTrigger: React.FC<any> = ({ onPress }) => (
	<Icon name="dumbbell" provider="fontAwesome5" size={30} onPress={onPress} style={styles.addExercise} />
);

const getOptions = async (): Promise<OptionType[]> => {
	const exercises = await getExercises();

	return exercises.map(mapExerciseToOption);
};

export const WorkoutPage: React.FC = () => {
	const [exercises, setExercises] = useState<WorkoutExercise[]>([]);

	useSetEntityStateTitle();

	const handleAddExercise = (id: string, name: string): void => {
		setExercises((prev) => [...prev, { id, name, reps: [] }]);
	};

	const handleDeleteExercise = (id: string): void => {
		setExercises((prev) => prev.filter((exercise) => exercise.id !== id));
	};

	const handleAddRep = (id: string): void => {
		setExercises((prev) =>
			prev.map((exercise) => {
				if (exercise.id === id) {
					return {
						...exercise,
						reps: [...exercise.reps, { weight: 0, count: 0, id: randomString() }],
					};
				}

				return exercise;
			}),
		);
	};

	const handleRemoveRep = (exerciseId: string, repId: string): void => {
		setExercises((prev) =>
			prev.map((exercise) => {
				if (exercise.id === exerciseId) {
					return {
						...exercise,
						reps: exercise.reps.filter((rep) => rep.id !== repId),
					};
				}

				return exercise;
			}),
		);
	};

	return (
		<Page>
			<View>
				<SelectList
					title="Select exercise"
					trigger={ModalTrigger}
					options={getOptions}
					onSelect={handleAddExercise}
				/>
			</View>

			<View>
				{exercises.map(({ id, name, reps }) => (
					<View key={id}>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 15,
								justifyContent: 'space-between',
							}}
						>
							<Text key={id} style={{ fontSize: 35 }}>
								{name}
							</Text>
							<View style={{ flexDirection: 'row' }}>
								<Icon
									provider="antDesign"
									name="addfolder"
									size={30}
									onPress={() => handleAddRep(id)}
									style={{ color: 'white', marginLeft: 10 }}
								/>
								<Icon
									provider="antDesign"
									name="delete"
									size={30}
									onPress={() => handleDeleteExercise(id)}
									style={{ color: 'white', marginLeft: 10 }}
								/>
							</View>
						</View>
						<View>
							{reps.map(({ count, weight, id: repId }, i) => (
								<View key={repId} style={{ flexDirection: 'row' }}>
									<Text style={{ fontSize: 25 }}>{weight} kg</Text>
									<Text style={{ fontSize: 25 }}>{count} reps</Text>
									<Icon
										provider="antDesign"
										name="delete"
										size={30}
										onPress={() => handleRemoveRep(id, repId)}
										style={{ color: 'white', marginLeft: 10 }}
									/>
								</View>
							))}
						</View>
					</View>
				))}
			</View>
		</Page>
	);
};

const styles = StyleSheet.create({
	addExercise: {
		color: palette.textPrimary,
	},
});
