module.exports = {
    getRandomCode: () =>{
        code = ''
        sequence = "abcdefghijklmnopqrstuvwxyz1234567890"
        characters = sequence.split('')
        limit = 15
        for (let i = 0; i < limit; i++) {
            code += characters[(Math.random() * (characters.length - 1)).toFixed(0)]
        }
        return code;
    },
    getBoolean: (int) =>{
        if (int == 0) {
            return false
        }else{
            return true
        }
    },
    removeSomeChar: (string, char, replace)=>{
        return string.replace(char, replace);
    }
}