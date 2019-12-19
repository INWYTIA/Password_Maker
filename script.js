var lengthRequestEl = document.getElementById('lengthRequest');
var upperAlphaEl = document.getElementById('upperAlpha');
var lowerAlphaEl = document.getElementById('lowerAlpha');
var numCharsEl = document.getElementById('numChars');
var specialCharsEl = document.getElementById('specialChars');
var outputEl = document.getElementById('output');
var targetLength;
var wantUpper;
var wantLower;
var wantNum;
var wantSpecial;

var password = {
    pieces : [],
    length : 0,
    upperChars : false,
    lowerChars : false,
    numChars : false,
    specialChars : false,
    charTypes : ['alphaUp', 'alphaLow', 'num', 'special'],
    characters : {
        alphaUp : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',],
        alphaLow : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',],
        num : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',],
        special : [' ', '!', '\\', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~',],
    },
    getCharType : function() {
        return password.charTypes[Math.floor(Math.random() * password.charTypes.length)];
    },
    getPassword : function() {
        console.log(password.pieces)
        targetLength = lengthRequestEl.value;
        console.log(targetLength);
        wantUpper = upperAlphaEl.checked;
        console.log(wantUpper);
        wantLower = lowerAlphaEl.checked;
        console.log(wantLower);
        wantNum = numCharsEl.checked;
        console.log(wantNum);
        wantSpecial = specialCharsEl.checked;
        console.log(wantSpecial);
        if ((wantUpper === true || wantLower === true || wantNum === true || wantSpecial === true) && targetLength >= 8 && targetLength <= 128) {
            password.pieces.length = 0; 
            password.lowerChars = false;
            password.upperChars = false; 
            password.numChars = false; 
            password.specialChars = false;
            while (wantUpper !== password.upperChars || wantLower !== password.lowerChars || wantNum !== password.numChars || wantSpecial !== password.specialChars) {    
                for (password.length = 0; password.length < targetLength; password.length++) {
                    password.pieces[password.length] = password.getChar()
                }
            }
        } else {
            alert ('Please select a character type and ensure password length is between 8 and 128 characters.')
        }
        console.log(password.pieces)
        outputEl.value = password.pieces.join('')
    },
    getChar : function() {
        var newChar;
        do {
            var type = password.getCharType();
            if (type === 'alphaUp') {
                if (wantUpper) {
                    password.upperChars = true ;
                    newChar = password.characters.alphaUp[Math.floor(Math.random() * password.characters.alphaUp.length)]
                }
            } else if (type === 'alphaLow') {
                if (wantLower) {
                    password.lowerChars = true ;
                    newChar = password.characters.alphaLow[Math.floor(Math.random() * password.characters.alphaLow.length)]
                }
            } else if (type === 'num') {
                if (wantNum) {
                    password.numChars = true ;
                    newChar = password.characters.num[Math.floor(Math.random() * password.characters.num.length)]
                }
            } else if (type === 'special') {
                if (wantSpecial) {
                    password.specialChars = true ;
                    newChar = password.characters.special[Math.floor(Math.random() * password.characters.special.length)]
                }
            }
        } while (newChar === undefined);
        return newChar
    }
};

document.getElementById('btn').addEventListener('click', password.getPassword);
