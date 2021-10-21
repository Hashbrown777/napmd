import {
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
			'./ccount/index.js',
			'./markdown-table/index.js',
			'./remark-gfm/index.js',
			...glob('./mdast*/index.js'),
			...glob('./mdast*/lib/**/*.js'),
			...glob('./micromark*/index.js'),
			...glob('./micromark*/lib/**/*.js'),
			...glob('./unist-*/*.js')
		].reduce(
			([config, mappings], name) => {
				config[name
					.replace(/^\.\/|\.js$/g, '')
					.replace(/[^/]+(?=\/)/, (lib) => (lib + '@' + (mappings[lib] || (() => { throw lib; })())))
					.replace(/\/index$/, '')
				] = name;
				return [config, mappings];
			},
			[{}, {
				'ccount'                                            : '2.0.0',
				'markdown-table'                                    : '3.0.1',
				'mdast-util-definitions'                            : '5.1.0',
				'mdast-util-find-and-replace'                       : '2.1.0',
				'mdast-util-to-hast'                                : '11.2.1',
				'mdast-util-to-markdown'                            : '1.2.1',
				'mdast-util-to-string'                              : '3.1.0',
				'micromark'                                         : '3.0.5',
				'micromark-util-character'                          : '1.1.0',
				'remark-gfm'                                        : '2.0.0',
				'unist-builder'                                     : '3.0.0',
				'unist-util-generated'                              : '2.0.0',
				'unist-util-is'                                     : '5.1.1',
				'unist-util-position'                               : '4.0.1',
				'unist-util-stringify-position'                     : '3.0.0',
				'unist-util-visit'                                  : '4.0.0',
				'unist-util-visit-parents'                          : '4.1.1',

				'mdast-util-gfm-autolink-literal'                   : '1.0.1',
				'mdast-util-gfm-table'                              : '1.0.1',
				'micromark-core-commonmark'                         : '1.0.1',
				'micromark-extension-gfm-strikethrough'             : '1.0.1',
				'micromark-util-decode-string'                      : '1.0.1',
				'micromark-util-types'                              : '1.0.1',

				'mdast-util-from-markdown'                          : '1.0.0',
				'mdast-util-gfm'                                    : '1.0.0',
				'mdast-util-gfm-strikethrough'                      : '1.0.0',
				'mdast-util-gfm-task-list-item'                     : '1.0.0',
				'micromark-extension-gfm-autolink-literal'          : '1.0.0',
				'micromark-extension-gfm'                           : '1.0.0',
				'micromark-extension-gfm-table'                     : '1.0.0',
				'micromark-extension-gfm-tagfilter'                 : '1.0.0',
				'micromark-extension-gfm-task-list-item'            : '1.0.0',
				'micromark-factory-destination'                     : '1.0.0',
				'micromark-factory-label'                           : '1.0.0',
				'micromark-factory-space'                           : '1.0.0',
				'micromark-factory-title'                           : '1.0.0',
				'micromark-factory-whitespace'                      : '1.0.0',
				'micromark-util-chunked'                            : '1.0.0',
				'micromark-util-classify-character'                 : '1.0.0',
				'micromark-util-combine-extensions'                 : '1.0.0',
				'micromark-util-decode-numeric-character-reference' : '1.0.0',
				'micromark-util-encode'                             : '1.0.0',
				'micromark-util-html-tag-name'                      : '1.0.0',
				'micromark-util-normalize-identifier'               : '1.0.0',
				'micromark-util-resolve-all'                        : '1.0.0',
				'micromark-util-sanitize-uri'                       : '1.0.0',
				'micromark-util-subtokenize'                        : '1.0.0',
				'micromark-util-symbol'                             : '1.0.0'
			}]
		)[0],
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
