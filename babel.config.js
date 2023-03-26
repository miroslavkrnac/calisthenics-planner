module.exports = function (api) {
	api.cache(true);

	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					alias: {
						'@components': './src/components',
						'@utils': './src/utils',
						'@pages': './src/pages',
						'@colors': './src/colors',
						'@consts': './src/consts',
						'@navigation': './src/navigation',
						'@hooks': './src/hooks',
					},
				},
			],
		],
	};
};
