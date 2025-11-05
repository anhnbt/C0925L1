// // Cách 1 (Array literals): [] Cặp dấu ngoặc vuông (Khuyến nghị)
// // const cars = ['VinFast', 'Mec', 'BMW', 'Vios', 'Honda', 'Huyndai', 'G63', 'Mitsubishi'];
// // console.log('Before: ' + cars)
// // cars[1] = 'Mercedes';
// // console.log('After: ' + cars)
// // console.log(cars[6]); // G63
// // console.log('Do dai cua mang: ' + cars.length);
// // console.log(cars[cars.length - 1]); // (cars.length - 1)
// // let sonTungMTPCar = cars[6];
// // console.log(sonTungMTPCar);
// // console.log(cars[0])
// // console.log(cars[1])
// // console.log(cars[2])
// // console.log(cars[...])
// // for (let i = cars.length - 1; i >= 0; i--) {
// //     console.log(cars[i])
// // }
//
//
//
// // const histories = [];
// // histories.push('andy.codegym.vn'); // return 1
// // histories.push('james.codegym.vn'); // return 2
// // histories.push('ken.codegym.vn'); // return
// //
// // console.log("Trang hien tai: " + histories.pop());
// // console.log(histories.length); // 2
// // histories.pop(); // james.codegym.vn
// // console.log(histories.length); // 1
// // histories.pop(); // andy.codegym.vn
// // console.log(histories.length); // 0
// const students = ['Ngoc', 'Long', 'Ky', 'Khang'];
// students.push('Hang');
// console.log(students.sort());
// const numbers = [3, 11, 7, 9, 22];
// console.log(numbers.reverse())
// // console.log(numbers.sort(function(a, b) {
// //     return b - a;
// // })); // callbackFn
// console.log(students.concat(['Thanh', 'Long']));
//
// // map, reduce, filter
//
//
//
//
//
// // const arr = [1, 'CodeGym', false];
// // const fruits = ['Banana', 'Apple', 'MeoMeo'];
//
// // Cách 2: new Array()
// // const cars = new Array('BMW', 'VinFast', 'Vios');
// // const numbers = [10]; // 1 element
// // const numbers = new Array(10); // 10 element
// // console.log(numbers);
// const students = [];
// function themSinhVien() {
//     let numberOfStudents = parseInt(prompt("Moi nhap so sinh vien muon them: "));
//     for (let i = 0; i < numberOfStudents; i++) {
//         students[i] = prompt("Nhap ten sinh vien thu "+i+" vao: ");
//     }
//     document.getElementById('students').innerHTML = students.join("<br>");
// }
// const lstFullNames = ['Ha Van Ngoc', 'Le Thi Trang', 'Nguyen Van A', 'Nguyen Thi B', 'Nguyen Ngoc Khang'];
// lstFullNames.sort(function(a, b) {
//     let namesA = a.split(' ');
//     let namesB = b.split(' ');
//     if (namesA[namesA.length - 1] < namesB[namesB.length - 1]) return -1;
//     if (namesA[namesA.length - 1] > namesB[namesB.length - 1]) return 1;
//     return 0;
// })
// console.log(lstFullNames);
// let lstLastNames = lstFullNames.map((name) => extractLastName(name));
// function extractLastName(n) {
//     let arr = n.split(' ');
//     return arr[arr.length - 1];
// }
// console.log(lstLastNames.sort(function(a, b) {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
// }));

// indexOf, includes, map, filter, reduce
const students = []; // empty array
students.push('Hai')//0
students.push('Toan')//1
students.push('A')// 2
students.push('B')
students.push('C');
// indexOf
console.log(students.indexOf('Mr. Hai')); // Neu tim thay no tra ve chi so, neu khong tra ve -1
console.log(students.includes('Mr. Hai')); // neu co tra ve true
// let str = 'Hai quay xe';
// console.log(str.includes('Hai'));

// Map
console.log(students.map(function(item) {
    return 'Mr. ' + item;
}))
const numbers = [];
console.log(numbers.map(function(item) {
    return item * 2;
}))
console.log(numbers.filter(function(item) {
    return item >= 3;
}))
let sum = numbers.reduce(function(prev, curr) {
    return prev + curr;
}, 0)
console.log(sum);

function sayHello(fn) {
    fn('Xin chao');
}
sayHello(function(value) {
    document.write(value);
});
