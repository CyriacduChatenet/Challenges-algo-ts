// demander une liste de notes
// affciher la moyenne des notes
// afficher la note la plus haute
// afficher la note la plus basse
// afficher la note la plus proche de 10
// afficher la note la plus proche de 0

let sumOfNotes = 0;

const userNotes = prompt('Enter notes separate with ","');
const userMarks = String(userNotes).split(",");
console.log(userMarks);

userMarks.forEach((mark) => {
  sumOfNotes += Number(mark);
});

const calcMoyenne = (notes: number, divider: number) => {
  let moyenne = notes / divider;
  return console.log(`La moyenne est de ${moyenne}`)
}

const userMarkTypeNumber = userMarks.map((mark) => {
  return Number(mark);
});

const calcMaxNote = (array: number[]) => {
  const res = Math.max(...array);
  console.log(res);
};
const calcMinNote = (array: number[]) => {
  const res = Math.min(...array);
  console.log(res);
};

const numberNearTo = (array: number[]) => {
  array.map((mark: number) => {
    if (mark >= 8 && mark <= 12) {
      return console.log(`${mark} is mark near to 10`);
    }

    if (mark >= 0 && mark <= 3) {
      return console.log(`${mark} is mark near to 0`);
    }
  });
};

calcMoyenne(sumOfNotes, userMarkTypeNumber.length);
numberNearTo(userMarkTypeNumber);
calcMaxNote(userMarkTypeNumber);
calcMinNote(userMarkTypeNumber);