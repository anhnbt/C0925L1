const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawScore(score) {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'red';
    ctx.fillText('Điểm: ' + score, 500, 40);
}

let otoX = 0;
let otoY = 0;
let score = 0;
drawScore(score)
const oto = new Image(100, 150);
oto.src = 'oto.webp';
oto.onload = () => {
    ctx.drawImage(oto, otoX, 0, 200, 100);
}
window.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        otoX += 20;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(oto, otoX, otoY, 200, 100);
        score++;
        drawScore(score);
    } else if (event.key === 'ArrowLeft') {
        otoX -= 20;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(oto, otoX, otoY, 200, 100);
        drawScore(score);
    } else if (event.key === 'ArrowUp') {
        otoY -= 20;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(oto, otoX, otoY, 200, 100);
        drawScore(score);

    } else if (event.key === 'ArrowDown') {
        if (otoY < canvas.height - 100) {
            otoY += 20;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(oto, otoX, otoY, 200, 100);
            drawScore(score);
        }

    }
})
