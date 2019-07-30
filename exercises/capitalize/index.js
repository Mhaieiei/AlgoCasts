// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let space = true;
    let re = "";
    for (let index = 0; index < str.length; ++index) {
        if(space) {
            re += str[index].toUpperCase();
            space = false
        }else if(str[index] == ' '){
            space = true;
            re += " "
        } else {
            re += str[index];
        }
        // console.log('re', re)
    }
    return re;
}

// var a = capitalize('a short sentence')

module.exports = capitalize;
