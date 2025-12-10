// // class ES6
//
// class Car {
//     #name;
//     #color;
//     #year;
//
//     // parameter
//     constructor(name, color, year) {
//         this.#name = name;
//         this.#color = color;
//         this.#year = year;
//     }
//
//     start() {
//         console.log(`Khoi dong xe..`);
//     }
// }
// //
// // const car1 = new Car('VinFast VF9', 'white', 2024);
// // const car2 = new Car('VinFast VF5', 'black', 2023);
// // console.log(car1)
// // console.log(car2)
// // const today = new Date();
// // console.log(today);
// // const area = Math.PI * 10 * 10;
// // console.log(area);

// Function constructor
// function Circle(radius, color) {
//     this.radius = radius;
//     this.color = color;
//
//     this.getRadius = function() {
//         return this.radius;
//     }
//
//     this.getArea = function() {
//         return Math.PI * this.radius * this.radius
//     }
// }
//
// const ball = new Circle(10, 'red');
// const light = new Circle(8, 'yellow');
// const wheel = new Circle(15, 'black');
//
// // objectName.color
// // objectName.getArea()
// console.log(wheel.getArea().toFixed(2));
// console.log(ball.color); // red
// console.log(wheel.color);

// Function anonymous
// const Circle = function(name, color) {
//     this.name = name;
//     this.color = color;
// }
// const wheel = new Circle(15, 'black');
// console.log(wheel.color);
let name = 'Mr. Gold';
function Person(firstName) {
    this.name = firstName;

    this.walk = function() {
        console.log('Go go...');
    }
    this.say = function(msg) {
        console.log(this.name + ': ' + msg);
    }
}
const services = ['Bánh phở', 'Thịt bò sống', 'Thịt bò chín', 'Hành', 'Thịt bò viên', 'Quẩy', 'Cơm nguội'];
const prices = ['1k', '2k', '5k', '10k', '20k', '50k', '100k', '200k'];
const truongThon = new Person('Trưởng thôn');
const grab = new Person('Grab');
const kieuNu = new Person('Kiều Nữ');
truongThon.say('Bla bla...');
kieuNu.say('Bla bla...');
grab.name = 'Chú bé tê liệt';
grab.say('...');
