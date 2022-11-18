// Le jeu des cinquante points
// 2 dés
// À tour de rôle, deux joueurs lancent deux dés.
// S’ils n’obtiennent aucun double, ils ne marquent pas de points.

// En revanche, si leurs dés affichent des doubles,
// voici comment calculer leur score :
// Un double 1, 2, 4, 5 = 5 points
// Un double 6 = 25 points
// S’ils obtiennent un double 3, ils repartent à zéro
// Le premier joueur à atteindre 50 points gagne la partie.

let endGame = false;

class Player {
  playerName = "";
  scoreTotal = 0;
  scoreFirstDie = 0;
  scoreSecondDie = 0;

  generateDies = () => {
    this.scoreFirstDie = Math.round(Math.random() * 5 + 1);
    console.log(this.scoreFirstDie);

    this.scoreSecondDie = Math.round(Math.random() * 5 + 1);
    console.log(this.scoreSecondDie);
  };

  playerTurn = () => {
    this.generateDies();

    if (
      (this.scoreFirstDie === 1 && this.scoreSecondDie === 1) ||
      (this.scoreFirstDie === 2 && this.scoreSecondDie === 2) ||
      (this.scoreFirstDie === 4 && this.scoreSecondDie === 4) ||
      (this.scoreFirstDie === 5 && this.scoreSecondDie === 5)
    ) {
      this.scoreTotal += 5;
    } else if (this.scoreFirstDie === 3 && this.scoreSecondDie === 3) {
      this.scoreTotal = 0;
    } else if (this.scoreFirstDie === 6 && this.scoreSecondDie === 6) {
      this.scoreTotal += 25;
    }
  };
}

const firstPlayer = new Player();
firstPlayer.playerName = "joueur 1";

const secondPlayer = new Player();
secondPlayer.playerName = "joueur 2";

do {
  firstPlayer.playerTurn();

  secondPlayer.playerTurn();

  if (firstPlayer.scoreTotal === 50) {
    console.log(
      `${firstPlayer.playerName} à gagner la partie avec ${firstPlayer.scoreTotal} points contre ${secondPlayer.scoreTotal} points pour ${secondPlayer.playerName}`
    );
    endGame = true;
  } else if (secondPlayer.scoreTotal === 50) {
    console.log(
      `${secondPlayer.playerName} à gagner la partie avec ${secondPlayer.scoreTotal} points contre ${firstPlayer.scoreTotal} points pour ${firstPlayer.playerName}`
    );
    endGame = true;
  } else {
    console.log("partie en cours ...");
    endGame = false;
  }
} while (endGame === false);
