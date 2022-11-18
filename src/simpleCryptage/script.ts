// Ce message doit être crypté

// Vous devez réaliser un script pour crypter le texte ci-dessus
// Chaque lettre doit être remplacée par sa position dans l'alphabet
// "a" = 1, "b" = 2,

const userValue = prompt("Write a text");

let resultNumber: number[] = [];

let resultStr: string;

userValue?.split("").forEach((str) => {
  const letter = str.charCodeAt(0) - 96;
  resultNumber.push(letter);

  const result = resultNumber.join().replaceAll(",", "");
  resultStr = result;
});

console.log(resultStr);
