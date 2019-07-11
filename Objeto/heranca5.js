console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function () {
    return this[0];
}

console.log([0,2.9,8,65,6].first());
console.log(['a','b','c','d'].first());

