var password = {
    length : 0,
    characters : {
        alpha : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        num : ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        special : [' ', '!', '\\', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'],
    },
    getCharType : function() {
        return password[characters][Math.floor(Math.random() * password.characters.length)]
    }
}
// Computes random numbers according to array length
// choices[Math.floor(Math.random() * choices.length)]