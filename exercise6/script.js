const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function koch(x1, y1, x2, y2, length,depth){
    if(depth === 0){
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        return;
    }

    const newLength = length / 3;
    const dx = x2 - x1;
    const dy = y2 - y1;

    //координати двох точок, які ділять відрізок на 3 частини
    const xA = x1 + dx / 3;
    const yA = y1 + dy / 3;
    const xB = x1 + dx * 2 / 3;
    const yB = y1 + dy * 2 / 3;

    //координати вершини трикутника
    const angle = Math.PI / 3;
    const xC = xA + dx / 3 * Math.cos(angle) + dy / 3 * Math.sin(angle);
    const yC = yA - dx / 3 * Math.sin(angle) + dy / 3 * Math.cos(angle);

    //рекурсія для чотирьох нових відрізків
    koch(x1, y1, xA, yA, newLength, depth - 1);
    koch(xA, yA, xC, yC, newLength, depth - 1);
    koch(xC, yC, xB, yB, newLength, depth - 1);
    koch(xB, yB, x2, y2, newLength, depth - 1);

}

const depth = 4;                  //глибина рекурсії

//крива Коха
const startX1 = 50; const startY1 = 180;
const startX2 = 750; const startY2 = 180;
const startLength = 700;

koch(startX1, startY1, startX2, startY2, startLength, depth);

//сніжинка Коха: три криві, з'єднані у трикутник
const side = 300;
const x1 = 250;
const y1 = 500;
const x2 = x1 + side;
const y2 = y1;
const x3 = x1 + side / 2;
const y3 = y1 - side * Math.sqrt(3) / 2;

koch(x2, y2, x1, y1, side, depth);
koch(x3, y3, x2, y2, side, depth);
koch(x1, y1, x3, y3, side, depth);
