let users = [
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5},
    {id:6},
    {id:7},
    {id:8},
]

/******* Create random peer ******/
/******** Result : ********/
/* 
[
    [ { id: 5 }, { id: 1 } ],
    [ { id: 3 }, { id: 7 } ],
    [ { id: 6 }, { id: 8 } ],
    [ { id: 4 }, { id: 2 } ]
]
*/

// Création de groupes de 2 joueurs de manière aléatoire
// si le nombre de joueurs est impair alors il y aura un groupe de 3 joueurs