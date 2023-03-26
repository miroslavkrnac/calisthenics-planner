import React from 'react';
import { ExercisesList } from '@components/ExercisesList/ExercisesList';
import { Page } from '@components/Page';

export const ExercisesPage: React.FC = () => (
	<Page>
		<ExercisesList />
	</Page>
);
