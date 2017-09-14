// Упражнение 3
//==============
// Воспользуйтесь функцией _keepHighest чтобы отрефакторить функцию max.
// Функция max не должна принимать аргументов.

// Не меняйте:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// Проведите рефакторинг:
var max = function(xs) {
    return _.reduce(function(acc, x){
        return _keepHighest(acc, x);
    }, -Infinity, xs);
};