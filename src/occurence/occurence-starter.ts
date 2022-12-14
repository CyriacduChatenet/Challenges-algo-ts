let p = `
Faites tremper les pois chiches et les fèves dans l'eau 12 h, les égoutter et les cuire 45 mn à l'auto cuiseur.
Peler oignon et ail, les hacher ainsi que le persil.
Passer les fèves et les pois chiches au mixer (ou robot).
Mélanger avec le persil, l'oignon, l'ail, la farine, les épices, le sel.
Pétrissez le tout avec vos mains en ajoutant un peu d'eau si nécessaire. Rassemblez la pâte et laisser reposer au réfrigérateur pendant minimum 30 mn.
Façonner une trentaine de boulettes de la grosseur d'une pièce de 2 euros.
Les faire frire 2/3 mn puis les égoutter sur du papier absorbant.
Servir chaud ou froid avec des petites sauces tomates aux herbes, ou sauces yaourts.
`
// compter le nombre d'occurence pour chaque mot
/********  EXEMPLE */
/*
[
  { word: 'chiches', occurences: 2 },
  { word: 'les', occurences: 10 },
  { word: 'pois.', occurences: 2 },
  { word: 'et', occurences: 9 },
  ...
]
*/

const countWordOccurence = (sentence: string) => {
  return sentence.replace(',', '').split(' ').reduce((acc: any, curr) => {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});
};


const sentence = prompt('Enter a sentence') as string;

const result = countWordOccurence(sentence);

console.log(result);