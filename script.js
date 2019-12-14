var password = {
    length : 0,
    targetLength : 0,
    wantUpper : confirm('Uppercase?'),
    wantLower : confirm('Lowercase?'),
    wantNum : confirm('Numbers?'),
    wantSpecial : confirm('Special?'),
    charTypes : ['alpha', 'num', 'special'],
    characters : {
        alpha : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        num : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        special : [' ', '!', '\\', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'],
    },
    getCharType : function() {
        return 'this.characters.' + this.charTypes[Math.floor(Math.random() * this.charTypes.length)]

    },
    getChar : function(type) {
        return type[Math.floor(Math.random() * type.length)]
    }
}
// Computes random numbers according to array length
// ]
console.log (password.getCharType())
console.log (password.wantUpper)