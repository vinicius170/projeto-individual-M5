const readline = require ("readline-sync");

let propriedades = [];
let aux = "";

while(aux != 'sair'){
    aux= readline.question('Digite a propriedade ')
    //aux -> font-size

    propriedades.push(aux);

    aux = readline.question('Para cessar digite "sair" , para continuar digite qualquer tecla ');
    
    if(aux == "sair"){
        console.log(propriedades.sort().join("\n"));
    }
}