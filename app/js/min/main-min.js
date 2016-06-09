'use strict'

var app = "Hellow";
console.log(window.app);
console.log(this.app);


function sum(a, b) {
	var result = a+b;
	return result
};

alert(sum(3,5));


