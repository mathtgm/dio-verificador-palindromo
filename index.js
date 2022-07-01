var frase1 = "ovo";

console.log(verificador(frase1));

function verificador(a) {
    if(!a) return "String inexistente";
    
    let frase1Reverse = a.split("").reverse().join("");

    return frase1Reverse === frase1;
}