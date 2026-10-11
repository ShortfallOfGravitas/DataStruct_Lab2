// noinspection SpellCheckingInspection

const canvas = document.getElementById('myCanvas');

const ctx = canvas.getContext('2d');

//процедура Prov-lin (малює контур трикутника)
function drawTriangle(x1, y1, x2, y2, x3, y3){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.stroke();
}

//рекурсивна процедура
function drawFractal(x1, y1, x2, y2, x3, y3, n){
    if(n > 0){
        //знаходимо середини сторін
        const x1n = (x1 + x2) / 2;
        const y1n = (y1 + y2) / 2;

        const x2n = (x2 + x3) / 2;
        const y2n = (y2 + y3) / 2;

        const x3n = (x3 + x1) / 2;
        const y3n = (y3 + y1) / 2;

        //будуємо перевернутий трикутник по знайдених точках
        drawTriangle(x1n, y1n, x2n, y2n, x3n, y3n);

        //запускаємо рекурсію для 3-х нових кутових трикутників
        drawFractal(x1, y1, x1n, y1n, x3n, y3n, n - 1);
        drawFractal(x2, y2, x1n, y1n, x2n, y2n, n - 1);
        drawFractal(x3, y3, x2n, y2n, x3n, y3n, n - 1);
    }
}


const n = 5;    //порядок фрактала (глибина рекурсії)

//координати зовнішнього трикутника
const startX1 = 320, startY1 = 10;
const startX2 = 600, startY2 = 470;
const startX3 = 40, startY3 = 470;

drawTriangle(startX1, startY1, startX2, startY2, startX3, startY3);
drawFractal(startX1, startY1, startX2, startY2, startX3, startY3, n);
