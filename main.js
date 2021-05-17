let names = ['Ivan', 'Ann', 'Ksenia', 'Ludmila'];

let shortNames = names.filter((name) => {
	return name.length < 5
});

console.log(shortNames);

let ansvers = ['Ivan', 'Ann', 'Hello'];

ansvers = ansvers.map((item) => item.toLowerCase());

console.log(ansvers);

console.log(`Пользователь ${name}, ${age} лет`);

function fetchData(data, count = 0) {
	console.log(`Данные: ${data} в количестве ${count}`);
}

fetchData('something');

function max (...numbers) {
	console.log(numbers);
}
max(3, 4, 67);

const arr1 = [1, 2, 5],
		arr2 = [43, 2, 6];

const res = Math.max(...arr1, ...arr2);
console.log(res);

const avatar = 'Photo';
const user = {
	name: 'default',
	pass: 'querty',
	rights: 'user'
};

const admin = {
	name: 'admin',
	pass: 'root',
};

// const res = Object.assign({}, user, admin);
const res = {...user, ...admin, avatar};

console.log(res);

const x = 25, y = 10;
const coords = {x, y,
	calcSq() {
		console.log(this.x*this.y);
	}
};

coords.calcSq();

console.log(coords);

const user = {
	name: {
		first: 'Sam',
		second: 'Smith'
	},
	pass: 'querty',
	rights: 'user'
};

const {name: {first, second}, pass, rights} = user;

console.log(first, second);

function connect({
	host = 'localhost',
	port = 3000,
	user = 'default'}) {
		console.log(`host: ${host}, port: ${port}, user: ${user}`)
}

connect({
	port: 232
});

const numbers = [[3, 5], [6, 8]];

const [[a, b], [c, d]] = numbers;

console.log(a, b, c, d);

const country = {
	name: 'England',
	population: 80000000,
	gender: {
		male: ['15%', '40%'],
		female: ['16%', '29%']
	}
}
// country.gender.male[0];

const {gender: {male: [maleUnder18, maleAdult], female: [femaleUnder18, femaleAdult]}} = country;

console.log(maleUnder18, femaleAdult);