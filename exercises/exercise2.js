//src

var filterQs = function (xs) {
    return filter(function (x) {
        return match(/q/i, x);
    }, xs);
};
// end src

var matcherQs = match(/q/i);

var filterMatcherQs = filter(matcherQs);

var filteredQs = filterMatcherQs(['q','s', 'q2']);
console.log(filterMatcherQs(['q','s', 'q2'] ));

