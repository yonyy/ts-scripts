function curry(func: Function, ...params: any[]) {
	return function(this: any, ...args: any[]) {
		return func.apply(this, [...params, ...args]);
	}
}

function add(a: number, b: number) {
	return a + b;
}

function tripleAdd(a: number, b: number, c: number) {
	return a + b + c;
}

const addThree = curry(add, 3);
const addTwo = curry(tripleAdd, 2);
const addFive = curry(add, 2, 3);
const addSix = curry(curry(tripleAdd, 1), 5);


console.log(addThree(2));
console.log(addTwo(2, 1));
console.log(addThree(2));
console.log(addSix(10));