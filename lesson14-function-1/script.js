// // top-down
// // hoisting
// function sayHello(name = 'CodeGym') {
//     console.log('Xin chao ' + name);
// }
//
// // function declare, call, invoke
// sayHello('Phuong'); // Xin chao
// sayHello('Tuan Anh'); // Xin chao
// // sayhello(); // Xin chao
//
//
// // const result = sayHello('Thành');
// // console.log('Ket qua: ' + result); // Xin cho Thành
//
// // console.log('C0925L1', true, 1, [1, 2, 3, 4]);
//
// // max: ten ham
// // firstNumber, secondNumber: Tham so (parameter)
// // function max(a, b, c) {
// //     if (a > b) {
// //         if (a > c) return a;
// //         else return c;
// //     } else {
// //         if (b > c) return b;
// //         else return c;
// //     }
// // }
// // let a = 10;
// // let b = 20;
// // let c = 100;
// // console.log(max(a, b, c)); // 25
// // // condition ? if_true : if_false;
// // console.log('Chuong trinh da ket thuc')
//
//
// // function division(a, b) {
// //     if (b === 0) return;
// //     return a / b;
// // }
// // console.log(division(10, 0));
// let a = 10; // global scope
// let b = 20; // global scope
// function swap(a, b) {
//     // phạm vi của biến
//     // function scope
//     let temp = a;
//     a = b;
//     b = temp;
// }
// console.log('before call swap ' + a); // 10
// console.log('before call swap ' + b); // 20
// swap(a, b); // past-by-value
// console.log('after call swap ' + a); // 20
// console.log('after call swap ' + b); // 10
//
//
// // block scope
// {
//     const fullName = 'CodeGym';
//     console.log(fullName);
// }
// if (true) {
//     var age = 30; // global scope
//     // block scope
// }
// console.log(age);
//
// // function sayHello() {
// //     var msg = 'Hello World!';
// // }
// // sayHello();
// // console.log(msg);
//
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// function expression
// const sayHello = function() {
//     console.log('Xin chao');
// }

// arrow function
const sayHello = (name) => console.log('Xin chao ' + name);


sayHello('Phuong');
sayHello('Tuan Anh');
