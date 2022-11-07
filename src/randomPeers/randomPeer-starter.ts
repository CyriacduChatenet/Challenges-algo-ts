type User = {
    id: number;
}
let users: User[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
];

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

const shuffleArray = (array : User[]) => {
    return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

const sliceIntoChunks = (array: User[], chunkSize: number) => {
    const resultArrays = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        resultArrays.push(chunk);
    }
    return resultArrays;
};

const createRandomGroup = () => {
    if(users.length % 2 === 0) {
        const shuffleUsers = shuffleArray(users);
        console.log(sliceIntoChunks(shuffleUsers, 2));
    } else {
        const shuffleUsers = shuffleArray(users);
        console.log(sliceIntoChunks(shuffleUsers, 3));
    }
};

createRandomGroup()