//1. Основні типи даних та операції з ним 
let string = "Hello";
let number = 123;
let array = [1, 2, 3];
let object = { name: "Vania", age: 17};
let func = () => "function";

console.log(string, number, object, func);
console.log(typeof string, typeof number, typeof array, typeof object, typeof func);

//2. Зміна типів
let srt = 'Name', num = 34;
console.log(Number(srt), String(num)); //NaN "34"

//3. Порівняння рядка та числа
let num1 = "100", num2 = 100;
console.log("==:", num1 == num2, "===:", num1 === num2);

//4. Шифрування/дешифрування числа
let code = 786;
console.log(`Введене число: ${code}`);

let encrypt = number.toString().split('').map(d => (parseInt(d) + 7) % 10).join('');
let decrypt = number.toString().split('').map(d => (parseInt(d) + 3) % 10).join('');

let encrypted = encrypt(code);
console.log("Зашифроване число:", encrypted);
console.log("Дешифроване число:", decrypt(encrypted));
