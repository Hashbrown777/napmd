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
		input   : [
			...glob('./@material-ui/*/es/**/*.js'),
			...glob('./@material-ui/{icons,pickers}/esm/**/*.js')
		].reduce(
			(config, name) => {
				if (
					(!/\/index\.js$/.test(name)) ||
					/\/(?:esm?|core\/es\/(?:styles|utils))\/index.js$/.test(name)
				) {
					config[name
						.replace(/^.*\/([^/]+)\/esm?(?=\/)/, (str, lib) => (lib + '@' + {
							core    : '4.12.3',
							types   : '5.1.0',
							utils   : '4.11.2',
							styles  : '4.11.4',
							system  : '4.12.1',
							lab     : '4.0.0-alpha.60',
							icons   : '4.11.2',
							pickers : '3.3.10'
						}[lib]))
						.replace(/\.js$/, '')
						.replace(/(?<=((?:\/|^)[^/]+))(\1|\/index)$/, '')
					] = name;
				}
				return config;
			},
			{}
		),
		plugins : [
			replace({
				delimiters        : ['', ''],
				preventAssignment : false,
				values            : {
					'\'@material-ui/utils\''          : '"@material-ui/es/utils"',
					'"@material-ui/utils"'            : '"@material-ui/es/utils"',
					'\'@babel/runtime/helpers/typeof' : '"@babel/runtime/helpers/esm/typeof',
					'"@babel/runtime/helpers/typeof' : '"@babel/runtime/helpers/esm/typeof'
				}
			}),
			typescript(tsConfig),
			terser(terserConfig)
		],
		output  : {
			format    : 'amd',
			dir       : '../dist/@material-ui/',
			sourcemap : true
		}
	}
];
