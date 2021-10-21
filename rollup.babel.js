import {
	replace,
	typescript,
	terser,
	glob,
	rollup,
	tsConfig,
	terserConfig
} from './rollup.common';

export default [
	{
		...rollup,
		input   : glob('./@babel/runtime/helpers/esm/*.js').reduce(
			(config, name) => {
				config[name
					.replace(/^.*\/esm\//, '')
					.replace(/\.js$/, '')
				] = name;
				return config;
			},
			{}
		),
		plugins : [
			replace({
				delimiters        : ['"', '"'],
				preventAssignment : false,
				values            : {
					'@babel/runtime/helpers/typeof' : '"@babel/runtime/helpers/esm/typeof"'
				}
			}),
			typescript(tsConfig),
			terser(terserConfig)
		],
		output  : {
			format    : 'amd',
			dir       : '../dist/@babel/runtime@7.15.3/helpers/',
			sourcemap : true
		}
	}
];
