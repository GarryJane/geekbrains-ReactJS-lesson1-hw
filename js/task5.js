/*
 5. Напишите цикл, который создает массив промисов, внутри каждого промиса происходит обращение к ресурсу
 (https://jsonplaceholder.typicode.com/users/number), где вместо number подставляется число от 1 до 10,
 в итоге должно получиться 10 промисов.
 Следует дождаться выполнения загрузки всеми промисами и далее вывести массив загруженных данных
 */

/**
 * @description Функция, выполняющая асинхронный запрос методом GET
 * @param url
 * @return {Promise}
 * */
function requestGET(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}
/**
 * @description Функция, выполняющая n запросов вида: <url><( number 0 < i <= n )>, возвращает массив промисов
 * @param {number} n
 * @return {Array} promisesArr
 * */
function makePrpmisesArr(n) {
    let promisesArr = [];
    for (let i = 1; i <= n; i++) {
		promisesArr[i - 1] = requestGET('https://jsonplaceholder.typicode.com/users/' + i);
    }
    return promisesArr;
}

let promisesArr = makePrpmisesArr(10);

/*
 * Ждём завершения всех промисов, выводим результат.
 */
let resultArr = [];
Promise.all(promisesArr)
    .then(function (elemArr) {
        elemArr.forEach(function(elem){
            resultArr.push(elem.target.response);
        });
		console.log(`resultArr = ${resultArr}`);
    });



