const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawCantor(x, y, length){
    if(length < 1) return;      //базовий випадок

    //малюємо першу лінію, число - товщина
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, length, 5);

    //прорахунок наступної ітерації ліній
    const newLength = length / 3;
    const newY = y + 40;

    //рекурсія (онлі лівий та правий відрізок, відкидаємо центральний)
    drawCantor(x, newY, newLength);
    drawCantor(x + 2 * newLength, newY, newLength);
}

const startX = 50;
const startY = 50;
const startLength = 700;

drawCantor(startX, startY, startLength);