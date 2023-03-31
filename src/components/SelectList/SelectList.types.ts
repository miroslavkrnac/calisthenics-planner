export interface OptionType {
	value: string;
	label: string;
}

export interface SelectListProps {
	trigger: React.FC<{ onPress: VoidFunction }>;
	title: string;
	options: OptionType[] | (() => Promise<OptionType[]>);
	onSelect?: (value: string, label: string) => void;
}
