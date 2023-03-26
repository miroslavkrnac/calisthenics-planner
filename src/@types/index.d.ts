declare type FCC<T = {}> = React.FC<React.PropsWithChildren<T>>;

declare type AnyObject = Record<string, any>;
declare type AnyArray = any[] | readonly any[];
declare type ValuesOf<T> = T[keyof T];
