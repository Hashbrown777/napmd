import {
	typescript,
	terser,
	rollup,
	tsConfig,
	terserConfig
} from './rollup.common';

export default [
	{
		...rollup,
		input   : {
			'@date-io/dayjs@1.3.13' :
				'./@date-io/dayjs/build/index.esm.js',
			'@tinymce/tinymce-react@3.12.6' :
				'./@tinymce/tinymce-react/lib/es2015/main/ts/index.js',
			're-resizable@6.9.0' :
				'./re-resizable/lib/index.js',
			're-resizable@6.9.0/resizer' :
				'./re-resizable/lib/resizer.js'
		},
		plugins : [
			typescript(tsConfig),
			terser(terserConfig)
		],
		output  : {
			format    : 'amd',
			dir       : '../dist/',
			sourcemap : true
		}
	}
];
