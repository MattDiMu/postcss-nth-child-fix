import postcss from 'postcss';
import test    from 'ava';

import plugin from './';

function run(t, input, output, opts = { }) {
    return postcss([ plugin(opts) ]).process(input)
        .then( result => {
            t.deepEqual(result.css, output);
            t.deepEqual(result.warnings().length, 0);
        });
}


test('replace n with 1n', t => {
    return run(t, 'a:nth-child(n){ }', 'a:nth-child(1n){ }', { });
});
test('do not replace n', t => {
    return run(t, 'a:nth-child(n-1){ }', 'a:nth-child(n-1){ }', { });
});
test('replace n with 1n, if spaces or tabs are present', t => {
    return run(t, 'a:nth-child( n   ){ }', 'a:nth-child(1n){ }', { });
});
