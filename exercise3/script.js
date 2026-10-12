const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const minWall = 2;      //межа для зупинки, в пікселях


function draw(x, y, u, length){
    if(length < minWall) return;        //базовий випадок
    length *= 0.7;                      //зменшуємо довжину гілки

    //рахуємо координати кінця гілки
    const endX = x + length * Math.cos(u);
    const endY = y - length * Math.sin(u);

    //відмальовка гілки
    ctx.beginPath();
    ctx.moveTo(x, y);           //ставимо маркер в початок гілки
    ctx.lineTo(endX, endY);     //проводимо лінію до кінцевих координат
    ctx.stroke();

    //рекурсія
    draw(endX, endY, u + Math.PI / 4, length);   //left
    draw(endX, endY, u - Math.PI / 6, length);   //right

}

const startLength = 200;            //початкова довжина
const startAngle = Math.PI / 2;     //початковий кут, 90 градусів у радіанах

//стартові координати (центруємо на нашому Canvas 800x600)
const startX = canvas.width / 2;    //400 (центр по горизонталі)
const startY = canvas.height;               //600 (самий низ полотна)

draw(startX, startY, startAngle, startLength);