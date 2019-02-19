// console.log('Hellow Word');

/*
console.log('Hellow Word');
console.log('Hellow Word');
*/

/**
 * Variáveis
 */
// var ezequiel = 'Ezequiel Dhonatan';

// console.log(ezequiel);

/*
ezequiel = true;
console.log(ezequiel);
*/

/*
ezequiel = 1999;
console.log(ezequiel);
*/

/*
ezequiel = 3.14;
console.log(ezequiel);
*/


/* ********************** Tipo de Variáveis **************************
String: 'Sou uma String' (Padrão mais rápido)
String: "Sou uma String"
 * 
Inteiro: 12
 * 
Booleanos: true / false
 * 
Pontos Flutuantes: 3.14159265
 * 
Array: new Array()
 *         [1,.2,3]
 * 
Objetos: var = car {nome: "Fusion", Ano: 2019, Marca: 'Ford'};
 * 
Undefined: var teste;
*/





/* ********************** ERROS **************************
Não Inciar com Números: 123nomeVar = 123;
 * 
Não utilizar espaços: nome var = 321;
 * 
Não utilizar caracteres especiais: !@#$%¨&*()-~{}[];.<>\: nome$@#Var = 232132;
 * 
Utilizar variáveis que criou: area = altura * largura;
 * 
 Ter menos de 15 caracteres: nomeDeVariavelComMuitosCaracteres = 321;
 * 
Nome fazer sentido: a = 'Nome Pessoa';
*/





/* ********************** CONCATENÇÃO ************************** */
/*
var name        = 'Ezequiel Dhonatan';
var age         = 23;
var ageTwo      = 90;


var name        = prompt('Qual o seu nome?');
var age         = prompt('Qual a sua idade?');
var ageTwo      = 90;

console.log('O ' + name + ' tem '+ age + ' anos de idade');
console.log(age + '' + ageTwo);
console.log(name + ' ' + age);
*/




/* ********************** OPERADORES ************************** */
// ## ARITIMÉTICOS
// var n1 = 12;
// var n2 = 4;
// console.log(n1 + n2 + 4); SOMA
// console.log(n1 - n2 - 4);  // SUBTRAÇÃO
// console.log(n1 * n2);      // MULTIPLICAÇÃO
// console.log(n1 / n2);      // DIVISÃO
// console.log(n1 ** n2);        // POTENCIAÇÃO

// ## ORDEM DE PRIORIDADE DOS OPERADORES ARITIMÉTICOS
// console.log((4 - 3 + 2 ) * 2);
// console.log((4 - 2 + 2)  / 2);
// console.log(((4 - 2 + 2)  / 2 + 2) * 3);

// ## INCREMENTO
// console.log(n1++); // INCREMENTO (n1 = n1 +1)
// console.log(n1); // RESULTADO INCREMENTO
// console.log(++n1); // PRÉ INCREMENTO

// ## DECREMENTO
// console.log(n1--); // DECREMENTO
// console.log(n1); // RESULTADO PRÉ DECREMENTO
// console.log(--n1); // RESULTADO PRÉ DECREMENTO

// ## RESTO DA DIVISÃO
// console.log(17 % 2); (SABER SE O NÚMERO É IMPAR OU PAR)



// ## OPERADORES DE ATRIBUIÇÃO
// var n1 = 12;
// var n2 = n1;
// n1 += 1;
// n1 -= 7;
// n1 *= 2;
// n1 /= 2;
// console.log(n1);


// ## OPERADORES DE COMPARAÇÃO
// console.log(2 == 2);                   // COMPARA SE UM LADO É IGUAL AO OUTRO
// console.log("Ezequiel" == "Ezequiel"); // COMPARA SE UM LADO É IGUAL AO OUTRO

// console.log(2 === '2');                // COMPARA SE O VALOR E O TIPO É IGUAL AO OUTRO
// console.log(2 != 3);                   // COMPARA SE UM VALOR É DIFERENTE DO OUTRO
// console.log(2 != "3");                 // COMPARA SE UM VALOR É DIFERENTE AO OUTRO
// console.log(2 !== "3");                // COMPARA SE UM VALOR E O TIPO É DIFERENTE AO OUTRO

// console.log(2 > 3);                    // VERIFICA SE UM VALOR É MAIOR QUE AO OUTRO
// console.log(2 < 3);                    // VERIFICA SE UM VALOR É MENOR QUE AO OUTRO
// console.log(2 >= 3);                   // VERIFICA SE UM VALOR É MAIOR OU IGUAL AO OUTRO
// console.log(2 <= 3);                   // VERIFICA SE UM VALOR É MENOR OU IGUAL AO OUTRO


// ## OPERADORES LÓGICOS
// var n1 = 12;
// console.log(typeof n1 == "number");                          // RETORNA O TIPO
// console.log(typeof n1 == "number" && n1 == 123);             // COMPARA O VALOR É TRUE
// console.log(typeof n1 == "number" || n1 == 12);              // COMPARA O VALOR É/OU TRUE
// console.log((typeof n1 == "number" || n1 == 12) && 2 == 2);  // COMPARA O VALOR É TRUE
// console.log(!true);                                             // COMPARA O VALOR É TRUE





/* ********************** OPERADORES CONDICIONAIS ************************** */
// var number = true;

/*
if (number)
  console.log("É verdadeiro!");
*/

/*
if (2 == 2 && 3 == "3") {
  console.log('*************');
  console.log("2 é igual a 2");
}
*/

/*
if (4 == 5)
  console.log("É igual");
else
  console.log("É diferente");
*/





/* ********************** OPERADORES CONDICIONAIS (TERNÁRIO) ************************** */
// var age   = 18;
// var text  = '';

// if (age >= 18)
//   text = 'É maior de idade!';
// else
//   text = 'É menor de idade';

// text = (age >= 18) ? 'É maior de idade!' : 'É menor de idade!';

// console.log(text);




/* ********************** OPERADORES CONDICIONAIS (SWITCH) ************************** */
// var number = 3;
// var result = '';

// if (number == 1) {
//   result = 'Um';
// }
// else if (number == 2) {
//   result = 'Dois';
// }
// else if (number == 3) {
//   result = 'Três';
// }
// else if (number == 4) {
//   result = 'Quatro';
// }
// else if (number == 5) {
//   result = 'Cinco';
// } else {
//   result = 'Opção não encontrada!';
// }

// switch (number) {
//   case 1:
//     result = 'Um';
//     break;
//   case 2:
//     result = 'Dois';
//     break;
//   case 3:
//     result = 'Três';
//     break;
//   case 4:
//     result = 'Quatro';
//     break;
//   case 5:
//     result = 'Cinco';
//     break;

//   default:
//     result = 'Opção não encontrada!';
//     break;
// }

// console.log(result);




/* ********************** FUNÇÕES ************************** */
// BASIC
// function showLog() {
//   console.log('******************************');
//   console.log('************Algo***************');
//   console.log('******************************');
// }

// showLog();