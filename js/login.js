function login() {
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    if (email.value == 'admin' && senha.value == 'admin') {
        alert("acesso autorizado!")
    } else {
        alert("usuario nao autorizado!")
    }
}



// class Gato{
//     constructor(nome,idade,sexo){
// this.nome = nome
// this.idade = idade
// this.sexo = sexo
// }
// miar(){
// console.log(`${this.nome} está miando, que lindo!`)
// }
// comer(){
//     console.log(`${this.nome} está comendo`)
// }

// }

// class Cachorro{
//     constructor(nome,idade,sexo){
//         this.nome = nome;
//         this.idade = idade;
//         this.sexo = sexo;
//     }
// latir(){
//     console.log(`${this.nome} está bravo, muito estranho!`)
// }
// faminto(){
//     console.log(`${this.nome} está com fome, deve ir dar comida paraele`)
// }
// conss
// }

// class Empilha{
//     constructor(empilha,){
//         this.arr = [empilha]

//     }
//     empilha(item){
//         this.arr.push(item)
//     }
//     desempilha(){
//         this.arr.pop()
//     }

// }