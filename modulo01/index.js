/* exercicio 01 */

// const nome = 'daniel';
// const peso = 84;
// const altura = 1.88;

// const imc = peso / (altura * altura);

// if(imc >= 30){
//   console.log(`${nome} você esta acima do peso`);
// }
// if(imc < 29){
//   console.log(`${nome} você esta no peso ideal`)
// }

/* exercicio 02 */

// const nome = 'nanda';
// const sexo = 'F';
// const idade = 50;
// const contribuicao = 40;

// const tempoDeContMinMulher = idade + contribuicao;
// const tempoDeContMinHomem = idade + contribuicao;

// if(tempoDeContMinMulher >= 85){
//   console.log(`${nome} você pode aposentar`);
// }else{
//   console.log(`${nome} você ainda nao tempo suficiente de contribuição`)
// }

/*exercicio 03*/

// const empresa = {
//   nome: 'Rocketseat',
//   cor : 'Roxo',
//   foco: 'Programação',
//   endereco:{
//     rua: 'Avenida ezequiel',
//     numero: 420
//   }
// }
// console.log(`A ${empresa.nome} está localizada em Rua ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

/* exercicio 04 */

// const dados = [
//   {
//     nome: 'c++',
//     especialidade: 'desktop'
//   },
//   {
//     nome: 'javascript',
//     especialidade: 'web'
//   },
//   {
//     nome: 'Ract native',
//     especialidade: 'mobile'
//   }
// ]

// for (let dado of dados){
//  console.log( dado.nome.includes('c++'));
// }

/* exercicio 05 */


// const usuarios = [
//   { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
//   { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
//   { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
// ]

// for(let usuario of usuarios){
//   console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
// }

// function trabalhaComCss(){
//   for(let usuario of usuarios){
//     console.log(usuario.tecnologias.includes('CSS'))
//   }
// }

// trabalhaComCss()

// const usuarios = [
//   {
//     nome: 'Salvio',
//     receitas: [115.3, 48.7, 98.3, 14.5],
//     despesas: [85.3, 13.5, 19.9]
//   },
//   {
//     nome: 'Marcio',
//     receitas: [24.6, 214.3, 45.3],
//     despesas: [185.3, 12.1, 120.0]
//   },
//   {
//     nome: 'Lucia',
//     receitas: [9.8, 120.3, 340.2, 45.3],
//     despesas: [450.2, 29.9]
//   }
// ]


// function calculeSaldo(receitas, despesas) {
//   const somaReceitas = somaNumeros(receitas);
//   const somaDespesas = somaNumeros(despesas);

//   return somaReceitas - somaDespesas;
// }

// function somaNumeros(usua) {
//   let soma = 0;
//   for (let usuario of usuarios) {
//     soma += usuario.receitas;
//   }
//   return soma;
// }

// console.log(somaNumeros(usuarios.receitas))

// for (let i = 0; i < usuarios.length; i++) {


//   if (usuarios[i].receitas > 0) {

//   }
// }

/* exercicio 06 */


