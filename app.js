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



/* ********************** FUNÇÕES COM PARÂMETROS ************************** */
// var n1 = 2;
// var n2 = 4;
// var result = ((n1 + n2) * 6) / 2;

// function calc(num1, num2) {
//   return ((num1 + num2) * 6) / 2;
// }

// console.log(calc(n1, n2));
// console.log(calc(4, 6));



/* ********************** FUNÇÕES COM PARÂMETROS OPCIONAIS ************************** */
// function calc(n1, n2, n3) {
//   // if (n3 == undefined) n3 = 2;

//   n3 = (n3 == undefined) ? 2 : n3;

//   return ((n1 + n2) * 6) / n3;
// }

// console.log(calc(2, 4));



/* ********************** FUNÇÕES RECURSIVAS ************************** */
// var number = 20;

// function recursive(n) {
//   console.log(n);

//   if (n > 0 )
//     return recursive(n - 1);
// }

// recursive(number);


/* ********************** FUNÇÕES ANINHADAS ************************** */
// function aninhadas(n1, n2, n3) {
//   function calc(n) {
//     return n * n3;
//   }

//   return calc(n1) + calc(n2);
// }

// function dobra(n) {
//   return n * 2;
// }

// console.log(aninhadas(2, 4, 4));




/* ********************** ARRAYS ************************** */
// DEFINIR ARRAYS

// var names = ['Ezequiel', 'Dhonatan', 'Souza'];
// var names = new Array('Ezequiel', 'Dhonatan', 'Souza');
// var names = new Array(5); // INICIA COM TAMANHO DE 5 ITENS
// var names = []; // ARRAY VAZIO

// console.log(names);
// console.log(names.length); // RETORNA A QUANTIDADE DE ARRAYS
// console.log(names[0]); // ACESSA A POSIÇÃO DO ARRAY
// console.log(names[0]); // ACESSA A POSIÇÃO DO ARRAY


// FUNÇÕES ARRAYS, EX: 1
// var names = [
//   "Ezequiel", 
//   "Dhonatan",
//   [1,2,3],
// ];

// console.log(names);

// console.log(names[2]); // RETORNA A POSIÇÃO DO ARRAY
// names[0] = "Ezequiel Dhonatan";
// console.log(names[2]); // RETORNA A POSIÇÃO DO ARRAY

// names.push("Cursos"); // ADICIONA UM ITEM NO FINAL DO ARRAY
// console.log(names);

// names.unshift("Start"); // ADICIONA UM ITEM NO INÍCIO DO ARRAY
// names.unshift("End"); // ADICIONA UM ITEM NO INÍCIO DO ARRAY
// console.log(names);

// names.pop("Cursos"); // REMOVE UM ITEM NO FINAL DO ARRAY
// console.log(names);

// names.shift("Cursos"); // REMOVE UM ITEM NO INÍCIO DO ARRAY
// console.log(names);


// FUNÇÕES ARRAYS, EX: 2
// var names = [
//   "Ezequiel", "Dhonatan"
// ];

// var numbers = [3, 5, 4, 1, 2];

// console.log(names.join(' - ')); // JUNTA OS ARRAYS COM SEPARADOR
// console.log(numbers.reverse()); // TRÁS OS ITENS DE TRÁS PARA FRENTE
// console.log(numbers.sort()); // FORMA ORDENADA

// console.log(numbers.sort(function (val1, val2) {
//   return val1 > val2
// })); // ORDENA DE FORMA CRESCENTE

// console.log(numbers.sort(function (val1, val2) {
//   return val1 > val2
// })); // ORDENA DE FORMA DECRESCENTE


// FUNÇÕES ARRAYS, EX: 3
// var names = [
//   "Ezequiel", "Dhonatan"
// ];

// var numbers = [3, 5, 4, 1, 3]; 

// console.log(names.indexOf("Ezequiel")); // POSIÇÃO INÍCIO ARRAY
// console.log(numbers.lastIndexOf(3)); // POSIÇÃO FIM ARRAY

// var result = numbers.findIndex(function (item) {
//   return itemm == 5;
// });

// console.log(result);



// FUNÇÕES ARRAYS, EX: 4
// var names = [
//   "Ezequiel", "Dhonatan"
// ];

// var numbers = [3, 5, 4, 1, 3]; 

// console.log(names);
// console.log(names.concat(numbers));

// numbers.sort();
// console.log(numbers);
// console.log(numbers.slice(1, 3));
// console.log(numbers.slice(1, numbers.length));

// console.log(numbers.toString());



// FUNÇÕES ARRAYS, EX: 5
// var names = [
//   "Ezequiel", "Dhonatan"
// ];

// var numbers = [3, 5, 4, 1, 3]; 

// console.log(names);

// var result = names.map(function (item) {
//   return item.toUpperCase();
// });

// console.log(result);

// console.log(numbers);

// result = numbers.map(function (value) {
//   return value * 2;
// });

// console.log(result);

// result = numbers.filter(function (item) {
//   return item == 2 || item  == 3 || item == 1;
// });

// console.log(result);


// FUNÇÕES ARRAYS, EX: 6
// var numbers = [3, 5, 4, 1, 3]; 

// var result = numbers.every(function (value) {
//   return value >= 1 && value <= 5;
// });

// console.log(result);

// var result = numbers.some(function (value) {
//   return value >= 5;
// });

// console.log(result);


// FUNÇÕES ARRAYS, EX: 7
// var numbers = [1, 2, 3, 4, 5];

// var result = numbers.reduce(function (previousValue, currenteValue, currentIndex, items) {
//   return previousValue + currenteValue;
// });

// console.log(result);

// result = numbers.reduceRight(function (previousValue, currenteValue, currentIndex, items) {
//   return previousValue + currenteValue;
// });

// console.log(result);




/* ********************** OBJETOS ************************** */
// var name = 'Ezequiel';
// var lastName = 'Dhonatan';

// var ezequiel = {
//   name: name,
//   lastName: lastName,

//   fullName: function () {
//     return this.name + ' ' + this.lastName;
//   },

//   fullNameTwo: function (separetor) {
//     return this.name + separetor + this.lastName; 
//   },
// };

// console.log(ezequiel.fullName());

// ezequiel.name = 'Other';
// console.log(ezequiel.fullName());

// console.log(ezequiel.fullNameTwo(' - '));


// OBJETOS, EX: 2
// var person =  new Object();
// person.name = 'Ezequiel';
// person.lastName = 'Dhonatan';
// person.fullName = person.name + ' ' + person.lastName;
// // console.log(person.fullName);
// console.log(person['name']);




/* ********************** LOOPS ************************** */
// FOR:
// var cars = [
//   {name: 'Car 1', year: 2000},
//   {name: 'Car 2', year: 2001},
//   {name: 'Car 3', year: 2002},
//   {name: 'Car 4', year: 2003},
//   {name: 'Car 5', year: 2004},
//   {name: 'Car 6', year: 2005},
// ];

// console.log('Antes');

// // console.log(cars[0].name);
// // console.log(cars[1].name);
// // console.log(cars[2].name);
// // console.log(cars[3].name);
// // console.log(cars[4].name);

// for (var index = 0; index < cars.length; index++) {
//   var result = 'Carro: ' + cars[index].name + ', Ano: ' + cars[index].year; 
//   console.log(result);
  
// }


// WHILE:
// var cars = [
//   {name: 'Car 1', year: 2000},
//   {name: 'Car 2', year: 2001},
//   {name: 'Car 3', year: 2002},
//   {name: 'Car 4', year: 2003},
//   {name: 'Car 5', year: 2004},
//   {name: 'Car 6', year: 2005},
// ];

// var i = 0;

// while (i < cars.length) {
//   var result = 'Carro: ' + cars[i].name + ', Ano: ' + cars[i].year; 
//   console.log(result);

//   i++;
// }

// var i = cars.length - 1;

// while (i >= 0) {
//   var result = 'Carro: ' + cars[i].name + ', Ano: ' + cars[i].year; 
//   console.log(result);
  
//   i--;

// }


// DO WHILE:
// var i = 90;

// do {
//   console.log(i);

//   i++;
// } while (i <= 10);

// console.log('Depois');