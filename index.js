var postcss = require('postcss');

module.exports = postcss.plugin('postcss-nth-child-fix', function (opts) {
    opts = opts || {};

    return function (css) {
        css.walkRules(function (rule) {
            rule.selector = rule.selector.replace(/:nth-child\([\t\n ]*n[\t\n ]*\)/gi, ':nth-child(1n)'); // eslint-disable-line max-len
        });
    };
});
