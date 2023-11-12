// Écrire un algorithme  permettant de saisir 10  entiers aléatoire
// dans un tableau et de  trier ce tableau par ordre croissante.
// Puis affiche ce tableau après le tri.
// console.log('start');


const result = [];

let min =1;
let max =100;

for (let index = 0; index <= 10; index++) {

  let random = Math.floor(Math.random() * (max - min)) + min;
  result.push(random);

}

function compareNombres(a, b) {
  return a - b;
}



console.log(result.sort(compareNombres));


// result.forEach(element => {
//   let random = Math.floor(Math.random() * (max - min)) + min;
//   element = random;
//   console.log(element);
//   console.log(random);

// });

// console.log(result);
