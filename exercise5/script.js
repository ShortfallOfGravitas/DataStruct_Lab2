const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawRect(x, y, l, a){
    ctx.beginPath();
    ctx.moveTo(x, y);
    //прорахунок 4-х кутів квадрата
    ctx.lineTo(x + l * Math.cos(a), y - l * Math.sin(a));
    ctx.lineTo(
      x + l * Math.sqrt(2) * Math.cos(a + Math.PI / 4),
      y - l * Math.sqrt(2) * Math.sin(a + Math.PI / 4)
    );
    ctx.lineTo(x + l * Math.cos(a + Math.PI / 2), y - l * Math.sin(a + Math.PI / 2));
    ctx.closePath();
    ctx.stroke();
}

//процедура Draw, рекурсивна побудова
function drawTreeSquares(x, y, l, a){
    //базовий випадок (поки сторона понад 4 пікселів)
    if(l > 4){
        drawRect(x, y, l, a);

        //рахуємо довжину сторони для наступних квадратів
        const newL = l / Math.sqrt(2);

        //рекурсія для лівого квадрата, координати зміщуються на верхній лівий кут поточного
        drawTreeSquares(
          x - l * Math.sin(a),
          y - l * Math.cos(a),
          newL,
          a + Math.PI / 4       //поворот вліво на 45 град
        );

        //рекурсія для правого квадрата, координати аналогічно
        drawTreeSquares(
          x - l * Math.sin(a) + newL * Math.cos(a + Math.PI / 4),
          y - l * Math.cos(a) - newL * Math.sin(a + Math.PI / 4),
          newL,
          a - Math.PI / 4       //поворот вправо на 45 град
        );

    }
}

const startX = 350;
const startY = 550;
const startL = 100; //початковий розмір квадрата (пікселі)
const startAngle = 0;

drawTreeSquares(startX, startY, startL, startAngle);
