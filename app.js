// console.log('Hellow Word');

/*
console.log('Hellow Word');
console.log('Hellow Word');
*/

/**
 * Variáveis
 */
var ezequiel = 'Ezequiel Dhonatan';

console.log(ezequiel);

ezequiel = true;
console.log(ezequiel);

ezequiel = 1999;
console.log(ezequiel);

ezequiel = 3.14;
console.log(ezequiel);


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
var n1 = 12;
var n2 = 4;
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
// console.log(2 == 2);                   (COMPARA SE UM LADO É IGUAL AO OUTRO)
// console.log("Ezequiel" == "Ezequiel"); (COMPARA SE UM LADO É IGUAL AO OUTRO)

// console.log(2 === '2');                (COMPARA SE O VALOR E O TIPO É IGUAL AO OUTRO)
// console.log(2 != 3);                   (COMPARA SE UM VALOR É DIFERENTE DO OUTRO)
// console.log(2 != "3");                 (COMPARA SE UM VALOR É DIFERENTE AO OUTRO)
// console.log(2 !== "3");                (COMPARA SE UM VALOR E O TIPO É DIFERENTE AO OUTRO)

// console.log(2 > 3);                    (VERIFICA SE UM VALOR É MAIOR QUE AO OUTRO)
// console.log(2 < 3);                    (VERIFICA SE UM VALOR É MENOR QUE AO OUTRO)
// console.log(2 >= 3);                   (VERIFICA SE UM VALOR É MAIOR OU IGUAL AO OUTRO)
// console.log(2 <= 3);                   (VERIFICA SE UM VALOR É MENOR OU IGUAL AO OUTRO)