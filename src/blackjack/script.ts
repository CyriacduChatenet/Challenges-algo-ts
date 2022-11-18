// La partie est composé de deux joueurs et un croupier
// Au début de la partie :
// Le croupier reçoit une carte
// Les joueurs reçoivent 2 cartes

// Chaques joueurs joue à son tour
// Le joueur peut choisir de piocher une carte
// Le joueur peut choisir de rester

// Le croupier joue à son tour
// Le croupier pioche une carte tant qu'il a moins de 17 points

// Les joueurs doivent se rapprocher du score 21
// Le joueur qui se rapproche le plus du score 21 gagne
// Si le joueur dépasse le score 21, il perd
// Si le joueur et le croupier ont le même score, le croupier gagne

// Chaque carte numérotée de 2 à 10 a sa valeur nominale (égale au numéro sur la carte)
// Les valets, les dames et les rois (les figures), ont une valeur de 10 points
// L’As vaut 1 point ou 11 points, au choix du joueur

const cardsList = [
  "As",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Valet",
  "Dame",
  "Roi",
];

class Croupier {
  cards = [] as string[];

  piocheGameStart = () => {
    const index = Math.floor(Math.random() * 13);
    const card = cardsList[index];
    this.cards.push(card);
    console.log("croupier", this.cards);
  };
}

class Player2 {
  name = "";
  cards = [] as string[];

  piocheGameStart = () => {
    for (let i = 0; i <= 1; i++) {
      const index = Math.floor(Math.random() * 13);
      const card = cardsList[index];
      this.cards.push(card);
      console.log("joueur", this.cards);
    }
  };
}

const thirdPlayer = new Player2();
const croupier = new Croupier();

const gameStart = () => {
  thirdPlayer.piocheGameStart();
  croupier.piocheGameStart();
};

gameStart();
