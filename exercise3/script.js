const pi = Math.PI;
const minWall = 2;      //межа для зупинки, в пікселях
let length = 10;

function draw(x, y, u, length){
    if(length < minWall) return;
    length *= 0.7;
    //тут шось з x, y треба зробити

    draw(x, y, u + pi/4, length);   //left
    draw(x, y, u - pi/6, length);   //right

}