//PROBLEMI ESERCIZIO 4
// SI PRESUPPONE CHE I CARATTERI SIANO TUTTI MINISCULO? EX 10


/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("EX1");
const pets = ['dog', 'cat', 'hamster', 'redfish'];
for(let i=0;i<pets.length;i++){
  console.log("elemento numero:",i, ":    ",pets[i]);
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets"*/

  console.log("EX2");
  pets.sort();
  console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
  console.log("EX3");
  pets.reverse();
  console.log(pets);
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
  console.log("EX4");
  let firstElement; //se utilizzo const diventa rosso?!
  firstElement=pets.splice(0,1);
  console.log(firstElement);
  console.log(typeof(firstElement));
  pets.push(firstElement);
  console.log(Array.isArray(firstElement));
  console.log(pets);


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for(let i=0;i<cars.length;i++){
  cars[i].push
}





/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("EX 6");

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
//QUESTO ALGORITMO FUNZIONA SOLO PRESUPPONENDO CHE OGNI AUTO ABBIA LA PROPRIETA TRIMS COMMENTO BY SHAHRUZ
console.log("EX 7"); 

const justTrims = [];

for(let i=0;i<cars.length;i++){
  justTrims[i]=cars[i].trims[0];
}
console.log(justTrims);



/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
  console.log("EX 8");
  for(let i=0;i<cars.length;i++){
    if(cars[i].color.charAt(0)==="b"){
      console.log("Fizz");
    }else{
      console.log("Buzz");
    }

  }
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

console.log("EX 9");

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let ex9i;
ex9i=32;
ex9j=0;

while(numericArray[ex9j]!==ex9i){
  console.log(numericArray[ex9j]);
  ex9j=ex9j+1;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

// ALGORITMO FUNZIONA SOLO SE I CARATTERI IN INGRESSO SONO MINUSCOLI.
console.log("EX 10");
const charactersArray = ["g", "n", "a", "u", "z", "d"];
const numbersArray=[];

for(let i=0;i<charactersArray.length;i++){


switch (charactersArray[i]){
  
  case "a":
    numbersArray.push(1);
  break;
  case "b":
    numbersArray.push(2);
  break;
  case "c":
    numbersArray.push(3);
  break;
  case "d":
    numbersArray.push(4);
  break;
  case "e":
    numbersArray.push(5);
  break;
  case "f":
    numbersArray.push(6);
  break;
  case "g":
    numbersArray.push(7);
  break;
  case "h":
    numbersArray.push(8);
  break;
  case "i":
    numbersArray.push(9);
  break;
  case "j":
    numbersArray.push(10);
  break;
  case "k":
    numbersArray.push(11);
  break;
  case "l":
    numbersArray.push(12);
  break;
  case "m":
    numbersArray.push(13);
  break;
  case "n":
    numbersArray.push(14);
  break;
  case "o":
    numbersArray.push(15);
  break;
  case "p":
    numbersArray.push(16);
  break;
  case "q":
    numbersArray.push(17);
  break;
  case "r":
    numbersArray.push(18);
  break;
  case "s":
    numbersArray.push(19);
  break;
  case "t":
    numbersArray.push(20);
  break;
  case "u":
    numbersArray.push(21);
  break;
  case "v":
    numbersArray.push(22);
  break;
  case "w":
    numbersArray.push(23);
  break;
  case "x":
    numbersArray.push(24);
  break;
  case "y":
    numbersArray.push(25);
  break;
  case "z":
    numbersArray.push(26);
  break;
  default:
    numbersArray.push(null);
}

}

console.log(numbersArray);
console.log("Se vedi null tra gli elemtni dell' array in output vuol dire che l'array di input non è stato inserito correttamente");

