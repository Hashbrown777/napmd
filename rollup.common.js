export {default as commonjs  } from '@rollup/plugin-commonjs';
export {default as inject    } from '@rollup/plugin-inject';
export {default as json      } from '@rollup/plugin-json';
export {default as replace   } from '@rollup/plugin-replace';
export {default as typescript} from '@rollup/plugin-typescript';
export {           terser    } from  'rollup-plugin-terser';
export {sync    as glob      } from  'glob';

export const rollup = {
    watch : {
        clearScreen : false
    }
};

export const tsConfig = {
    lib                              : ['DOM', 'ES5', 'ES6', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ESNext'],
    noEmitOnError                    : !process.env.ROLLUP_WATCH,
    jsx                              : 'react',
    moduleResolution                 : 'node',
    target                           : 'ES5',
    module                           : 'ES6',
    esModuleInterop                  : false,
	noEmitOnError                    : false,
    useDefineForClassFields          : true,
    importHelpers                    : true,
    downlevelIteration               : true,
    strict                           : true,
    allowSyntheticDefaultImports     : true,
    forceConsistentCasingInFileNames : true
};

export const terserConfig = {
    module   : true,
    compress : {
        arrows : false,
        ecma   : 5
    }
};
