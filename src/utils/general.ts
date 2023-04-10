export const sleep = (time: number): Promise<void> =>
	new Promise((res) => {
		setTimeout(() => {
			res();
		}, time);
	});

export const isEqual = <T, K>(a: T, b: K): boolean => JSON.stringify(a) === JSON.stringify(b);
