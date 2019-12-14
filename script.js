var password = {
    length : 0,
    targetLength : 0,
    wantUpper : confirm('Uppercase?'),
    upperChars : 0,
    wantLower : confirm('Lowercase?'),
    lowerChars : 0,
    wantNum : confirm('Numbers?'),
    numChars : 0,
    wantSpecial : confirm('Special?'),
    specialChars : 0,
    charTypes : ['alpha', 'num', 'special'],
    characters : {
        alpha : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        num : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        special : [' ', '!', '\\', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'],
    },
    getCharType : function() {
        return this.charTypes[Math.floor(Math.random() * this.charTypes.length)]

    },
    getChar : function(type) {
        if (type === 'alpha') {
            if (this.wantUpper) {
                return this.characters.alpha[Math.floor(Math.random() * this.characters.alpha.length)].toUpperCase
            } else if (this.wantLower) {
                return this.characters.alpha[Math.floor(Math.random() * this.characters.alpha.length)]
            }
        } else if (type === 'num') {
            if (this.wantNum) {
                return this.characters.num[Math.floor(Math.random() * this.characters.num.length)]
            }
        } else if (type === 'special') {
            if (this.wantSpecial) {
                return this.characters.special[Math.floor(Math.random() * this.characters.special.length)]
            }
        }
    },
}
// Computes random numbers according to array length
// this.characters.alpha[Math.floor(Math.random() * this.characters.alpha.length)]
console.log (password.getChar(this.getCharType()))
console.log (password.wantUpper)