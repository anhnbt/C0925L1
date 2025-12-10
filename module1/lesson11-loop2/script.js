for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
        // if kiem tra neu la dong dau tien, dong cuoi cung, cot tien, cot cuoi cung thi ve ngoi sao
        // nguoc lai ve 2 dau cach la: &nbsp;&nbsp;
        if (i === 0 || i === 4 || j === 0 || j === 9) {
            document.write('* '); // HTML entity: &nbsp;
        } else {
            document.write('&nbsp;&nbsp;&nbsp;'); // HTML entity: &nbsp;
        }
    }
    document.write("<br>");
}

// vẽ hình tam giác (top left)
for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
        document.write("*");
    }
    document.write("<br>");
}
document.write("<br>");
// vẽ hình tam giác (bottom left)
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}

document.write("<br>");
// vẽ hình tam giác (top right)
// vẽ hình tam giác (bottom right)
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= 5-i-1 ; j++) {
        document.write('&nbsp&nbsp;');
    }
    for (let k = 0; k<= i; k++) {
        document.write('*');
    }
    document.write('<br>');
}
