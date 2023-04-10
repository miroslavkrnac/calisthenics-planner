import { WorkoutFrequencyChart } from '@components/WorkoutFrequencyChart';
import React from 'react';
import { Page } from '../components/Page';

export const HomePage: React.FC = () => (
	<Page>
		<WorkoutFrequencyChart />
	</Page>
);
