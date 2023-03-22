declare type FCC<T = {}> = React.FC<React.PropsWithChildren<T>>;

declare type AnyObject = Record<string, any>;

declare type Routes = {
	home: undefined;
	exercises: undefined;
	'new-exercise': undefined;
};

declare type RoutesNames = keyof Routes;
