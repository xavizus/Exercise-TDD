const vocals = ['a','o','u','y', 'i', 'e', 'å', 'ä', 'ö',' ', '!', '&', '/', '$', '#'];

function returnLowerCase(letter) {
    return letter.toLowerCase();
}

function encrypt(string) {
    let newString = '';
    for(const letter of string) {
        if(!(vocals.includes(returnLowerCase(letter))) && isNaN(letter)) {
            newString+=`${letter}o${letter}`;
        } else {
            newString += letter;
        }
    }
    return newString;
}

function decrypt(string) {

    let newString = '';
    for(let index = 0; index < string.length; index++){
        newString += string[index];
        if(!(vocals.includes(returnLowerCase(string[index]))) && isNaN(string[index])) {
            index += 2;
        }
    }
    return newString;
}

module.exports = {encrypt, decrypt};