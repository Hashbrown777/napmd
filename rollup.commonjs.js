import {
	commonjs,
	terser,
	rollup,
	terserConfig
} from './rollup.common';

export default [
	{
		...rollup,
		input   : {
			'fast-memoize@2.5.2' :
				'./fast-memoize/src/index.js',
			//we should be able to put this through rollup.libs.js
			//since it has typescript, but for some reason it refuses
			//to parse the jsx
			'react-animate-height@2.0.23' :
				'./react-animate-height/lib/AnimateHeight.js',
			'escape-string-regexp@1.0.5' :
				'./escape-string-regexp/index.js'
		},
		plugins : [
			commonjs(),
			terser(terserConfig)
		],
		output  : {
			format    : 'amd',
			dir       : '../dist/',
			sourcemap : true
		}
	}
];
