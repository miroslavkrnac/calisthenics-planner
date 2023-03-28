import React from 'react';
import { Ionicons, MaterialCommunityIcons, Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import type { TextProps } from 'react-native';

type IconProvider = keyof typeof IconsMap;

type IoniconsNames = keyof typeof Ionicons.glyphMap;
type MaterialCommunityIconsNames = keyof typeof MaterialCommunityIcons.glyphMap;
type EntypoNames = keyof typeof Entypo.glyphMap;
type AntDesignNames = keyof typeof AntDesign.glyphMap;

type IconNames = IoniconsNames | MaterialCommunityIconsNames | EntypoNames | AntDesignNames;

export interface IconProps extends TextProps {
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
	fontAwesome5: FontAwesome5,
} as const;

export const Icon: React.FC<IconProps> = ({ provider, name, ...props }) => {
	const Component = IconsMap[provider];

	// any is intentional
	return <Component name={name as any} {...props} />;
};
