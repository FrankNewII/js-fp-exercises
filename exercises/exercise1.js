var curry = _.curry;

var map = curry(function (f, arr) {
    "use strict";
    return arr.map(f);
});

var match = curry(function (what, str) {
    return str.match(what);
});

var replace = curry(function (what, replacement, str) {
    "use strict";
    return str.replace(what, replacement);
});

var filter = curry(function (f, arr) {
    "use strict";
    return arr.filter(f);
});

var words = curry(function (split, words) {
    return words.split(split);
} );


var hasSpaces = match(/\s+/g);

var findSpaces = filter(hasSpaces);

var noVowels = replace(/[aeiou]/ig);

var censored = noVowels("*");

var splitterBySpace = words(' ');



console.log(splitterBySpace('Hello Worlds'));