import {createWriteStream} from 'fs';
import {promisify}         from 'util';
import {argv}              from 'process';
import _glob               from 'glob';
export const glob = promisify(_glob);

const packageVersion = /([@^~=](?:[\da-f]{8}|(?:\d+\.){2}\d+(?:-[a-z\d.]+\d|)))/;

const output = createWriteStream('lsjs.json');
function _write(string) {
	return new Promise((resolve) => {
		output.write(string, resolve);
	});
}
let started = false;
function write(obj) {
	let joiner = ',\n';
	if (!started) {
		started = true;
		joiner = '[\n';
	}
	return _write(
		(joiner + JSON.stringify(obj, undefined, 4))
			.replace(/(?<=\n) {4}/g, '\t')
			.replace(/(?<=\n)/g    , '\t')
	);
}

const done = {};
for (let lib of await glob('**/*@*', {ignore:['**/*.map', '**/@*']})) {
	lib = lib.replace(/\.js$/, '');
	const name      = lib.replace(packageVersion, '');
	const timestamp = lib.match(packageVersion)[1];
	if (!done[name]) {
		done[name] = timestamp;
		await write({
			name,
			location  : (argv[2] || '') + lib,
			timestamp,
			main      : ''
		});
	}
	else if (done[name] != timestamp)
		throw lib;
}
await _write('\n]');
