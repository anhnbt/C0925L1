// // function Car(name, model, weight, color) {
// //     this.name = name;
// //     this.model = model;
// //     this.weight = weight;
// //     this.color = color;
// //
// //     this.start = function() {
// //         // backtick `: Template literals
// //         console.log(`Car: ${this.name} started`);
// //     }
// // }
// //
// // const mercedes = new Car('Mercedes', 'C200', 2000, 'white');
// // mercedes.start();
//
// function Category(name) {
//     this.name = name;
// }
//
// const categories = [new Category('Điện thoại'), new Category('Máy tính')];
// console.log(categories[0]);
// // Coding Convention
// function DienThoaiThongMinh(price, name) {
//
// }


// const ipad = new Apple('tablet', 'gold');
// console.log(ipad.color); // 'green'
// ipad.getInfo(); // context
//
// function Apple(type, color) {
//     this.type = type;
//     this.color = color;
//
//     this.getInfo = getAppleInfo
// }
//
// function getAppleInfo() {
//     console.log('Loại: ' + this.type);
// }
//
// // const iphone = new Apple('smartphone');
// // console.log(iphone.color);
// // console.log(iphone.type); // smartphone
//
// getAppleInfo();


const Apple = function(type) {
    this.type = type;
}
const ipad = new Apple('tablet');
console.log(ipad);
