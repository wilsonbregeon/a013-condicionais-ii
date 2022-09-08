const num = Number(prompt("Digite um número"))

//parte 1 
if(num%2 === 0){
    if(num%3 === 0){
        console.log("divisível por 2 e 3")
    }else{
        console.log("divisível por 2")
    }
}else{
    if(num%3 === 0){
        console.log("divisível por 3")
    }else{
        console.log("divisível por nenhum dos dois")
    }
}

//parte 2
if(num % 2 === 0 || num % 3 === 0){
    console.log("divisível por 2 ou 3")
}else{
    console.log("não é divisível por 2 ou 3")
}
