
numRandom = aleatorio(0,9999);
cont = 0;

function aleatorio(min, maxi){
    var resul = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resul;
}

function traerIdArchivo(){
    var laCaja = document.getElementById("caja");
    var traerId = laCaja.value;
    adivinar(traerId);
}

function adivinar(traerId){
    if(traerId == numRandom){
        $("#parrafo").append($('<h3>crack ' + traerId + '</h3>'));
    }else{
        $("#parrafo").append($('<h3>Intentalo de nuevo ' + traerId + '</h3>'));
        cont ++;
        if(cont == 4){
            alert("Fail, el numero a adivinar era: "+ numRandom);
        }
    }
}