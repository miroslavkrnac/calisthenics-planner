export const pushOrEdit = <T>(arr: T[], item: T, compareFn: (item: T) => boolean): T[] => {
	const copy = JSON.parse(JSON.stringify(arr));
	const index = copy.findIndex(compareFn);

	if (index !== -1) {
		copy.splice(index, 1, item);
	} else {
		copy.push(item);
	}

	return copy;
};
