/*
* Напишите функцию loop, которая будет принимать параметры: times (значение по умолчанию = 0),
 * callback (значение по умолчанию = null) и будет в цикле (times раз), вызывать функцию callback.
 * Если функцию не передана, то цикл не должен отрабатывать ни разу.
 * Покажите применение этой функции
* */

/**
 * @author Michael Molchanov
 * @description Вызывает переданную в качестве аргумента функцию заданное число раз
 * @param {number} times
 * @param {function} callback
 * @return {function} callback
 **/
function loop(times = 0, callback = null ) {
	if(typeof callback != 'function') {
		console.log('callback argument must be type of {function}!');
		return false;
	}
	for(let i = 0; i < Math.floor(times); i++){
		callback();
	}
	return true;
}

function someF () {
	console.log('someF!');
	return true;
}

loop( 5 , someF);
loop( 5 , 'someF');
loop(5);
loop(-1, someF);
loop(5.5, someF);

