import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { ExerciseForm } from './src/components/ExerciseForm';
import { BottomPanel } from './src/components/BottomPanel';
import { ExercisesList } from './src/components/ExercisesList';
import { Page } from './src/components/Page';
import { Home } from './src/pages/Home';

const Test: React.FC = () => (
	<NativeRouter>
		<Page>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/exercises" Component={ExercisesList} />
				<Route path="/new-exercise" Component={ExerciseForm} />
			</Routes>

			<BottomPanel />
		</Page>
	</NativeRouter>
);

export default Test;
