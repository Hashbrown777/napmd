import remap    from './rollup.remap';
import commonjs from './rollup.commonjs';
import babel    from './rollup.babel';
import mui      from './rollup.mui';
import libs     from './rollup.libs';

export default [
	...remap,
	...commonjs,
	...babel,
	...mui,
	...libs
];
