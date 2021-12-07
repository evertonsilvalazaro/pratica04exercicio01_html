function somar() {

    let numero1 = parseInt(document.querySelector("#primeiro_numero").value);
    let numero2 = parseInt(document.querySelector("#segundo_numero").value);
    let resultado = numero1 + numero2;

    document.querySelector("#result").value = resultado;
      
}
/*
function somar(){
    var n1=primeiroNumero.value;
    var n2=segundoNumero.value;
    var soma =parseInt(n1) + parseInt(n2);
    reslt.innerHTML=soma;
}
*/