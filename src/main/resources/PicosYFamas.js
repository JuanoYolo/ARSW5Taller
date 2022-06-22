
const boton1= document.querySelector(".Boton1");

var llenarCuadro = document.getElementById("cuadro");
var lienzo = llenarCuadro.getContext("2d");
let numeros = []
var cont = 0;
var numRandom = aleatorio(0,9999);
var numeRandom = String(numRandom);
alert(numRandom);

function dibujarNumeros(){
    
    lienzo.font = "30px Arial";

    lienzo.fillText(String(numeros[0]),35,25);
    lienzo.fillText(String(numeros[1]),60,25);
    lienzo.fillText(String(numeros[2]),85,25);
    lienzo.fillText(String(numeros[3]),110,25);
    cont ++;
    
    if(cont < 4){
        intentos();
    }else{
        alert("Im Sorry!" + "Este era el numero" + numRandom);
    }
}

function aleatorio(min, maxi){
    var resul = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resul;
}

function intentos(){

    if(numeRandom == numeros){
        alert("Crack");
    }else{
        alert("Sigue intentando");
    }
}
function guardarNumero1(){
    if(numeros.length < 4){
        numeros.push("1");
    }else{
        dibujarNumeros();
    }
}

function guardarNumero2(){
    if(numeros.length < 4){
        numeros.push("2");
    }else{
        dibujarNumeros();
    }
}

function guardarNumero3(){
    if(numeros.length < 4){
        numeros.push("3");
    }else{
        dibujarNumeros();
    }
        
}

function guardarNumero4(){
    if(numeros.length < 4){
        numeros.push("4");
    }else{
        dibujarNumeros();
    }
}

function guardarNumero5(){
    if(numeros.length < 4){
        numeros.push("5");
    }else{
        dibujarNumeros();
    }
}

function guardarNumero6(){
    if(numeros.length < 4){
        numeros.push("6");
    }else{
        dibujarNumeros();
    }
}

function guardarNumero7(){
    if(numeros.length < 4){
        numeros.push("7");
    }else{
        dibujarNumeros();
    }
}

function guardarNumero8(){
    if(numeros.length < 4){
        numeros.push("8");
    }else{
        dibujarNumeros();
    }
}

function guardarNumero9(){
    if(numeros.length < 4){
        numeros.push("9");
    }else{
        dibujarNumeros();
    }
}

function guardarNumero0(){
    if(numeros.length < 4){
        numeros.push("0");
    }else{
        dibujarNumeros();
    }
}

