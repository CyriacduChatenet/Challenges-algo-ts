let words = [
    "kayak",
    "Paris",
    "été",
    "Ressasser"
]

/******** Result : ********/
/*
kayak est un palindrome
Paris n'est pas un palindrome
été est un palindrome
Ressasser est un palindrome
*/

const userWord = prompt('Enter a word') as string;

const checkPalindrom = (str: string) => {
    if(str[0].toUpperCase() === str[0]) {
        return console.log(str == str.split('').reverse().reverse().join(''));
    } else {
        return console.log(str == str.split('').reverse().join(''));
    }
  }

  checkPalindrom(userWord);