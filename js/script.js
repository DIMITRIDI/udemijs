"use strict";

const arr = [2, 23, 16, 38, 10];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
	return a - b;
}