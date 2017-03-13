/*
 Необходимо написать иерархию классов вида:
 Human -> Employee -> Developer
 Human -> Employee -> Manager

 Каждый Менеджер (Manager) должен иметь внутренний массив своих сотрудников (разработчиков),
 а так же методы по удалению/добавлению разработчиков.

 Каждый Разработчик (Developer) должны иметь ссылку на Менеджера и методы для изменения менеджера
 (имеется ввиду возможность назначить другого менеджера).

 У класса Human должны быть следующие параметры: name (строка), age (число), dateOfBirth (строка или дата)

 У класса Employee должны присутствовать параметры: salary (число), department (строка)

 В классе Human должен присуствовать метод displayInfo, который возвращает строку со всеми параметрами
 экземпляра Human.

 В классе Employee должен быть реализовать такой же метод (displayInfo),
 который вызывает базовый метод и дополняет его параметрами из экземпляра Employee

 Чтобы вызывать метод базового класса, необходимо внутри вызова метода displayInfo класса Employee написать:
 super.displayInfo(), это вызовет метод displayInfo класса Human и вернет строку с параметрами Human'a.
*/

/**
 * @description Класс "Человек"
 * @property {string} name - Имя
 * @property {number} age - возраст
 * @property {string} dateOfBirth - датарождения
 * @method displayInfo
 * */
class Human {
	constructor (name, age, dateOfBirth) {
		this.name = name;
		this.age = age;
		this.dateOfBirth = dateOfBirth;
	}
	displayInfo () {
		return `${this.name}, ${this.age}, ${this.dateOfBirth}`;
	}
}

/**
 * @description Класс "Сотрудник"
 * @extends Human
 * @property {string} name - Имя
 * @property {number} age - возраст
 * @property {string} dateOfBirth - датарождения
 * @property {number} salary - жалование
 * @property {string} department - департамент
 * @method displayInfo()
 * */
class Employee extends Human {
	constructor (name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth);
		this.salary = salary;
		this.department = department;
	}

	displayInfo () {
		return `${super.displayInfo()}, ${this.salary}, ${this.department}`;
	}
}

/**
 * @description Класс "Руководитель"
 * @extends Employee
 * @property {string} name - Имя
 * @property {number} age - возраст
 * @property {string} dateOfBirth - датарождения
 * @property {number} salary - жалование
 * @property {string} department - департамент
 * @ptoperty {Array} developers - разработчики в подчинении
 * @method addDeveloper(developer)
 * @method removeDeveloper(developer)
 **/
class Manager extends Employee {
	constructor (name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth, salary, department);
		this.developers = [];
	};

	addDeveloper (developer) {
		this.developers.push(developer); // добавляем во внутренний массив developers
	}

	removeDeveloper (developer) {
		let id = this.developers.indexOf(developer);
		this.developers.splice(id);
	}
}

/**
 * @description Класс "Разработчик"
 * @extends Employee
 * @property {string} name - Имя
 * @property {number} age - возраст
 * @property {string} dateOfBirth - датарождения
 * @property {number} salary - жалование
 * @property {string} department - департамент
 * @ptoperty {Object} manager - разработчики в подчинении
 * @method setManager(manager)
 * @method unsetManager ()
 **/

class Developer extends Employee {
	constructor (name, age, dateOfBirth, salary, department) {
		super(name, age, dateOfBirth, salary, department);
		this.manager = {};
	}
	setManager(manager) {
		this.manager = manager;
	}
	unsetManager () {
		this.manager = {};
	}
}

let m1 = new Manager("John Smith", 25, "01.01.1992", 4000, "Sale");
let m2 = new Manager("Kate Smith", 18, "01.01.1999", 4000, "Sale");
let m3 = new Manager("Sarah J. Parker", 51, "25.03.1965", 4000, "Sale");

let d1 = new Developer("Garry Jane", 30, "01.01.1987", 4500, "IT");
let d2 = new Developer("Mary Jane", 31, "01.01.1986", 4500, "IT");
let d3 = new Developer("John Watson", 32, "01.01.1985", 4500, "IT");

/* "Кадровые решения" )) */
m1.addDeveloper(d1);
m1.addDeveloper(d2);
m2.addDeveloper(d3);
d1.setManager(m1);
d2.setManager(m1);
d3.setManager(m2);
m1.removeDeveloper(d2);
d2.unsetManager();

/* Результат - два дуэта: m1+d1, m2+d3 */
console.log("Managers\n\t",m1,"\n\t",m2,"\n\t",m3,"\n","Developers\n\t",d1,"\n\t",d2,"\n\t",d3);