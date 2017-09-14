var words = _.curry(function (split, words) {
    return words.split(split);
} );

var splitterBySpace = words(' ');

var map = _.curry(function (f, arr) {
    "use strict";
    return arr.map(f);
});

var splitterArrBySpace = map(splitterBySpace);
console.log(splitterArrBySpace(['Hello Worlds', 'sdasd asd']));