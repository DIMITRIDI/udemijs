'use strict';

// touchstart - при начальном касании элемента
// touchmove - при движении пальца по элементу
// touchend - при отрыве пальца от элемента
// touchenter - когда мы ведем по экрану и попадаем на элемент, на который навешено это событие
// touchleave - когда палец продолжил движение по экрану и ушел за пределы элемента с событием
// touchcancel - когда точка сопрекосновения больше не регистрируется на поверхности экрана

window.addEventListener('DOMContentLoaded', () => {
	const box = document.querySelector('.box');

	box.addEventListener('touchstart', (e) => {
		e.preventDefault();

		console.log('Start');
		console.log(e.targetTouches);
	});

	box.addEventListener('touchmove', (e) => {
		e.preventDefault();

		console.log(e.targetTouches[0].pageX);
	});

	box.addEventListener('touchend', (e) => {
		e.preventDefault();

		console.log('End');
	});
});

// touches - список всех пальцев, которые взаимодействуют с экраном

// targetTouches - количество пальцев взаимодействующих с конкретным элементом

// changedTouches - список пальцев, участвующих в текущем событии