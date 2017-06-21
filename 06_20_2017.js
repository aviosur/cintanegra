//Ejercicio 1-a
for (i = 1; i < 51; i++) if (Number.isInteger(i/3)) {
    console.log(i+" Fizz");
} else if (Number.isInteger(i/5)) {
    console.log(i+" Buzz");
} else {console.log(i);};


//Ejercicio 1-b
for (i = 1; i < 51; i++) result =  Number.isInteger(i/3) ?
    console.log(i+" Fizz") : Number.isInteger(i/5) ? console.log(i+" Buzz") : console.log(i);

//Ejercicio 2-a

var number = Math.floor(Math.random() * 3) + 1;
var human = prompt("Escribe si quieres Piedra, Papel o Tijera", "Piedra");
var ai="";
var result="";
  if (number == 1) {ai="PAPEL"}
    else if (number == 2) {ai="TIJERA"}
    else if (number == 3) {ai="PIEDRA"}
    else {ai="OPCION INVALIDA"};

if (human.toLowerCase() == ai.toLowerCase()) {result = "AMBOS PIERDEN PUTOS"}
  else if (human.toLowerCase() == "piedra" && ai.toLowerCase() == "papel") {result = "Gana Lupita";}
  else if (human.toLowerCase() == "papel" && ai.toLowerCase() == "piedra") {result = "Ganaste Paps";}
  else if (human.toLowerCase() == "piedra" && ai.toLowerCase() == "tijera") {result = "Ganaste Paps";}
  else if (human.toLowerCase() == "tijera" && ai.toLowerCase() == "piedra") {result = "Gana Lupita";}
  else if (human.toLowerCase() == "tijera" && ai.toLowerCase() == "papel") {result = "Ganaste Paps";}
  else if (human.toLowerCase() == "papel" && ai.toLowerCase() == "tijera") {result = "Gana Lupita";}
  else {result = "La cago German"}
console.log(result)

//Ejercicio 2-b
function isItPolidorome(str) {
  var noSpace = /[\W_]/g;
  var lowerCased = str.toLowerCase().replace(noSpace, '');
  var reversed = lowerCased.split('').reverse().join('');
  return reversed===lowerCased
}

//Ejercicio 3-a
function createHalfPyramid (height) {

  for (var i = 1; i <= height; i++) {
    var row = '';

    for (var j = 1; j <= i; j++) {
      row += '*';
    }

    console.log(row);
  }
}

createHalfPyramid(50);

//Ejercicio 3-b
function checkCaps(str){
for (i = 0; i <= str.length; i++)
  {var l = str[i];
    if (l == l.toLowerCase())
      {
      p = l+" es minuscula";
      }
    else if (l==l.toUpperCase())
      {
      p = l+" es mayuscula";
      }
    else
      {
        "Algo esta mal amigo";
      }
    console.log(p);}
  };
