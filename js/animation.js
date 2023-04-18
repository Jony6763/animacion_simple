var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
pincel.fillStyle= "grey";
pincel.rect(0,0,600,400);
pincel.fill();

function dibujarCirculo(x,y,radio,color){
    pincel.fillStyle = (color);
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    //Math.PI = Numero PI (3.14)
    pincel.fill();
}
function clean(){
    pincel.clearRect(0,0,1000,1000);
}
var x = 0;
var sentido = 1;
function actualizar(){
    clean();
    if (x>600){
        sentido = -1;
    }
    else if(x<0){
        sentido = 1;
    }
    dibujarCirculo(x,50,30,"red");
    x = x + sentido;
  
    

}

setInterval(actualizar,5);






    // var contador = 1
// function contar(){
//     console.log(contador);
//     contador++
// }


// setInterval(contar,1000);

