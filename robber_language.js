const vocals = ['a','o','u','y', 'i', 'e', 'å', 'ä', 'ö',' ', '!', '&'];

function encrypt(string) {
    let newString = '';

    for(const letter of string) {
        if(!(vocals.includes(letter))) {
            newString+=`${letter}o${letter}`;
        } else {
            newString += letter;
        }
    }
    return newString;
}

function decrypt(string) {

    let newString = '';
    for(let index = 0; index < string.length-1; index++){
        newString += string[index];
        if(!(vocals.includes(string[index]))) {
            index += 2;
        }
    }
    return newString;
}

module.exports = {encrypt, decrypt};