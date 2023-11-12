// Écrire une fonction récursive qui permet de
// calculer la somme 1+2+3+...+ N. où N saisi
// par l'utilisateur.

//console.log('start');

function sommeDeN(params) {
  console.log(`params d'entrée : ${params}`);

  let tempValue = params - 1;

  while (tempValue >= 1) {
    params = params + tempValue;
    console.log(tempValue);
    tempValue --;
  }

  console.log(`params de sortie : ${params}`);
  return params
}

sommeDeN(6);
