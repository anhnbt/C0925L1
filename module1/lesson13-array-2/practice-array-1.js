// const arr = new Array(10);
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = +prompt("Moi nhap mot so nguyen bat ky");
//     if (arr[i] >= 10) {
//         count++;
//     }
// }
//
// console.log('Co ' + count + ' so nguyen lon hon hoac bang 10 la: ' + arr.filter(function (item) {
//     return item >= 10;
// }));

// const arr = [33, 55, 11, 2, 3, 5, 9, 88, 23, 10];
// let max = arr[0];
// let index = 0;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//         index = i;
//     }
// }
//
// console.log('Gia tri lon nhat la ' + max + ', vi tri ' + index);

// bai 3:

// const arr = [33, 55, 11, 2, 3, 5, 9, 88, 23, 10];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     total += arr[i];
// }
// map, filter, reduce, indexOf, includes
// arrow function, function expression

// console.log('Gia tri lon nhat la ' + max + ', gia tri trung binh: ' + (total / arr.length));
// console.log(Math.max(...arr));
// let sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue);
// console.log(sum / arr.length);


// Bai 4
// const arr = [33, 55, 11, 2, 3, 5, 9, 88, 23, 10];
// // console.log(arr.reverse());
// let reverseArr = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     reverseArr.push(arr[i]);
// }
// console.log(reverseArr)


// const arr = [-1, -5, 10, 5, 7, -99];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) count++;
// }
// console.log(count);
// console.log(arr.filter(function (x) {
//     return x < 0;
// }));
