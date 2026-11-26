// Задача 1.
// Создайте переменные с корректными именами, чтобы сохранить следующую информацию:
// 1. firstName – имя (строка)
// 2. lastName – фамилия (строка)
// 3. isStudent – является ли учеником курса (булево значение)
const firstName = "Kirill";
const lastName = "momLover";
const isStudent = true;

// Задача 2.
// 1. Объявите переменную age с числовым значением возраста студента.
// 2. Объявите переменную currentYear и присвойте ей значение текущего года (например, 2025).
// 3. Используя age и currentYear вычислите год рождения студента, запишите результат в переменную birthYear.
const age = 20;
const currentYear = 2026;
const birthYear = currentYear - age;

// Задача 3.
// Выведите в консоли сообщение в таком формате:
// Меня зовут [firstName] [lastName], мне [age] лет. Я ученик/ученица курса: [isStudent].
console.log(`My name is ${firstName} ${lastName}, I'm ${age} years old. I'm a student in course number 2: ${isStudent} `);

// Задача 4.
// Какое значение будет у переменной result?
// let a = '123';
// let b = +'456';
// let c = Number('789');
// let d = Boolean(0);
// let e = Boolean(' ');
// let result = a + b + c + d + e;

// Моя первая мысль что это будет строчное значение, 1231246, потому что а=строка, b+c=1245 + boolean(0) это ноль + boolean(' ') вроде это истина что равняется одному. Ща проверим

let a = '123';
let b = +'456';
let c = Number('789');
let d = Boolean(0);
let e = Boolean(' ');
let result = a + b + c + d + e;
console.log(result)

// мои догадки были неверными. Похоже, переменная a превратила всё в строчные элемент и поэтому все сложилось в строку, несмотря на то что b c числа. И если не переводить booleaan в число через Number наверное они записываются как тру фолс