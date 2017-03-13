/*
 * Напишите функцию calculateArea, которая будет принимать параметры, для вычисления площади
 * (можете выбрать какую то конкретную фигуру, а можете, основываясь на переданных параметрах,
 * выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры)
 * и возвращать объект вида: { area, figure, input }, где area - вычисленная площадь,
 * figure - название фигуры, для которой вычислялась площадь,
 * input - входные параметры, по которым было произведено вычисление
 */

'use strict';

/**
 * деструкторизация вида:
 *    let { figType, ...params } = figure;
 * не работает:
 * - в Chrome Версия 56.0.2924.87 (64-bit)
 * - в Mozilla Firefox for Ubuntu 52.0 (64-бит)
 */

/**
 * @description Функция частичный-деструктуризтор от  BABELJS.IO (возвращает объект, кроме ключей переданных в массиве keys)
 * @param {Object} obj
 * @param {Array} keys
 * @return {Object} target
 **/
function _objectWithoutProperties(obj, keys) {
	let target = {};
	for (let i in obj) {
		if (keys.indexOf(i) >= 0) continue;
		if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
		target[i] = obj[i];
	}
	return target;
}

/**
 * @description Функция расчёта площади куга, квадрата или треугольника
 * @author Michael Molchanov
 * @param {Object} figure
 * @return {Object} result
 **/
function calculateArea(figure) {

	let figType = figure.type,
		params = _objectWithoutProperties(figure, ['type']);
	let result = {
		input: figure,
		figure: figType
	};
	switch (figType) {
		case 'circle': {
			let {r} = params;
			result.area = 2 * Math.PI * r;
			break;
		}
		case 'square': {
			let {a} = params;
			result.area = a ** 2;
			break;
		}
		case 'triangle': {
			let {a, b, c} = params;
			let p = 1 / 2 * (a + b + c);
			result.area = Math.sqrt(p * (p - a) * (p - b) * (p - c)); // Формула Герона
			break;
		}
		default: {
			result.area = false;
			result.figure = 'Unsupported figure: ' + figType;
		}
	}
return result;
}

let fig1 = {
	type: 'square',
	a: 5
};

let fig2 = {
	type: 'triangle',
	a: 5,
	b: 6,
	c: 7
};

let fig3 = {
	type: 'circle',
	r: 5,
};

let fig4 = {
	type: 'rectangle',
	a: 5,
	b: 4
};


console.log(calculateArea(fig1));
console.log(calculateArea(fig2));
console.log(calculateArea(fig3));
console.log(calculateArea(fig4));
