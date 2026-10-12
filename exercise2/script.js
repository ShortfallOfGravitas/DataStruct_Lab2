const canvas  = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//процедура заливки квадрата (rectangle + floodFill)
function drawRect(x1, y1, x2, y2){
    const width = x2 - x1;
    const height = y2 - y1;

    ctx.fillStyle = "black";
    ctx.fillRect(x1, y1, width, height);
}

//рекурсивна процедура Draw
function drawCarpet(x1, y1, x2, y2, n){
    if(n > 0){
        const t = (x2 - x1) / 3;    //вираховуємо третину сторони

        //вісь OX вправо, вісь OY вниз
        //відмальовуємо центральний квадрат
        drawRect(x1 + t, y1 + t, x2 - t, y2 - t);

        //верхній ряд
        drawCarpet(x1, y1, x1 + t, y1 + t, n - 1);                  //верх-зліва
        drawCarpet(x1 + t, y1, x1 + 2 * t, y1 + t, n - 1);      //верх-центр
        drawCarpet(x1 + 2 * t, y1, x2, y1 + t, n - 1);              //верх-справа

        //середній ряд
        drawCarpet(x1, y1 + t, x1 + t, y1 + 2 * t, n - 1);
        drawCarpet(x1 + 2 * t, y1 + t, x2, y1 + 2 * t, n - 1);

        //нижній ряд
        drawCarpet(x1, y1 + 2 * t, x1 + t, y2, n - 1);
        drawCarpet(x1 + t, y1 + 2 * t, x1 + 2 * t, y2, n - 1);
        drawCarpet(x1 + 2 * t, y1 + 2 * t, x2, y2, n - 1);
    }
}

const n = 4;    //порядок фрактала (глибина рекурсії)

const startX1 = 120, startY1 = 40;
const startX2 = 520, startY2 = 440;

//малюємо рамку для зовнішнього квадрата
ctx.strokeRect(startX1, startY1, startX2 - startX1, startY2 - startY1);

drawCarpet(startX1, startY1, startX2, startY2, n);
