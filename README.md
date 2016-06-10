# PostCSS Nth Child Fix [![Build Status][ci-img]][ci]

[PostCSS] plugin to fix a known android 4.1 and 4.2 bug with nth-child (safe transformation).

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/MattDiMu/postcss-nth-child-fix.svg
[ci]:      https://travis-ci.org/MattDiMu/postcss-nth-child-fix

```css
/* input */
.foo:nth-child(n) {
    color: blue;
}

/* output */ 
.foo:nth-child(1n) {
    color: blue;
}
```

## Usage

```js
postcss([ require('postcss-nth-child-fix') ])
```

See [PostCSS] docs for examples for your environment.
