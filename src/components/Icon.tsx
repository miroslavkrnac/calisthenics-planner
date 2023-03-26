import React from 'react';
import { Ionicons, MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons';

type IconProvider = 'ionicons' | 'materialCommunityIcons' | 'entypo' | 'antDesign';

type IoniconsNames = keyof typeof Ionicons.glyphMap;
type MaterialCommunityIconsNames = keyof typeof MaterialCommunityIcons.glyphMap;
type EntypoNames = keyof typeof Entypo.glyphMap;
type AntDesignNames = keyof typeof AntDesign.glyphMap;

type IconNames = IoniconsNames | MaterialCommunityIconsNames | EntypoNames | AntDesignNames;

export interface IconProps {
	provider: IconProvider;
	name: IconNames;
	size?: number;
	color?: string;
}

const IconsMap = {
	ionicons: Ionicons,
	materialCommunityIcons: MaterialCommunityIcons,
	entypo: Entypo,
	antDesign: AntDesign,
} as const;

export const Icon: React.FC<IconProps> = ({ provider, name, ...props }) => {
	const Component = IconsMap[provider];

	return <Component name={name as any} {...props} />;
};
