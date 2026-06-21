
function genereatePassword(length,lowercase,uppercase,numbers,symbols){
    let password = "";
    let characters = "";
    if(lowercase){
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if(uppercase){
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(numbers){
        characters += "0123456789";
    }
    if(symbols){
        characters += "!@#$%^&*()";
    }
    if(characters === ""){
        return 'Please select at least one character type';
    }
    else if(length === 0) return 'Password length cannot be zero';
    for(let i =0;i<length;i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return password;
}




const passwordLength = 2;
const includesLowercase = false;
const includesUppercase = false;
const includesNumbers = false;
const includesSymbols = false;
console.log(genereatePassword(passwordLength,includesLowercase,includesUppercase,includesNumbers,includesSymbols));