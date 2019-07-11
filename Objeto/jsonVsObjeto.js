const obj = { a : 1, b : 2, c : 3, soma() { return this.a + this.b + this.c;} }
console.log(obj.soma());
console.log(JSON.stringify(obj));
console.log(JSON.parse('{"a":5, "b":6, "c":7}'));
console.log(JSON.parse('{ "a":"Joao", "b": true, "c": {}, "d": [0, 2, 3], "e": 7.5 }'));