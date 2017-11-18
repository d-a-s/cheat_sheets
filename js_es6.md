### [browser support](http://kangax.github.io/compat-table/es6/)

### [default function parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
```
function test(a=1, b={}, c=false){ }
```

### [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
```
function test(a, ...b) {} 
```

### [spread (...) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
```
test(...a);
[a, ...b, c];
```

### [object literal extensions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
```
var o={a:1, b, c:false};
```

### [for...of loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
```
for(let q of iterable) { }
typeof a[Symbol.iterator] == 'function' // check if a is an iterable

// iterable function
let q = function*() {
	yield 1;
	yield 2;
};

//make an object iterable:
let q = {
	a:1, b:2, c:3, d:4,
	[Symbol.iterator]: function*() {
		for(let i of Object.keys(this)) yield this[i];
	}
};
```

### [numeric literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_literals)
```
// leading 0 with all other numbers 0-7 = octal
let i = 0754; //decimal 492
// 0o, 0x, 0b prefix, can also be uppercase
i = 0o754; // also octal, dec 492
i = 0x754; // hex, dec 1876
i = 0b1010100100 // binary, dec 676

// toString - es1 standard
x = (676).toString(16); // hex of number, in string form
x = (676).toString(8); // octal
x = (676).toString(2); // binary
// works for bases 2 - 36
```

### [string template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
```
let a = `string test ${variable} ${function(a)} ${3+2}`;
let b = `line 1
line 2
	line 3 with tab
	line 4 with ${varForLine4}`;
```
