// Class (Lớp)
function Date(day = 1, month = 1, year = 1900) {
    // Properties (Thuoc tinh)
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function() {
        return this.day;
    }

    this.getMonth = function() {
        return this.month;
    }

    this.getYear = function() {
        return this.year;
    }

    this.setYear = function(year) {
        if (year > 2026) {
            throw new Error('Year must be 2026!');
        }
        this.year = year;
    }

    this.setDate = function(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    this.toString = function() {
        return this.day + '/' + this.month + '/' + this.year;
    }
}

let today = new Date(12, 11, 2025);
let currentDay = new Date();
// today.setYear(5000);
today.setDate(31, 12, 2025);
console.log(today.toString());
