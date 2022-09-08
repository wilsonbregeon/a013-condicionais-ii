//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

let nome = prompt("Qual o seu nome?")
let idade = Number(prompt("Qual a sua idade?"))

console.log(nome === "José"? ("Olá Zé"):("Olá, "+nome))
console.log(idade >= 18? ("Pode tirar carteira de motorista!") : ("Não pode tirar carteira de motorista!"))

