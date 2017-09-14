var words = _.curry(function (split, words) {
    return words.split(split);
} );

var splitterBySpace = words(' ');

var map = _.curry(function (f, arr) {
    "use strict";
    return arr.map(f);
});

var match = _.curry(function (what, str) {
    return str.match(what);
});

var replace = _.curry(function (what, replacement, str) {
    "use strict";
    return str.replace(what, replacement);
});

var filter = _.curry(function (f, arr) {
    "use strict";
    arr.filter(f);
});
//src

var filterQs = function (xs) {
    return _.filter(function (x) {
        return match(/q/i, x);
    }, xs);
};
// end src

var matcher = _.curry(function (reg, word) {
    return match(reg, word);
});

var filt = _.curry(function (f, arr) {
    return filter(f, arr);
});

var matcherQs = matcher(/q/i);

var filtQs = filt(matcherQs);

var filtArrayQs = filtQs(['asd', 'qwwe', 'asds,q', '22']);