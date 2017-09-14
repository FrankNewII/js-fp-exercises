var words = _.curry(function (split, words) {
    return words.split(split);
} );

var splitterBySpace = words(' ');
console.log(splitterBySpace('Hello Worlds'));