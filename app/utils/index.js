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
    formatDate: (date) => {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return {
            date:  date.getDate() + "/" + date.getMonth()+1 + "/" + date.getFullYear(),
            time: strTime
        }
    },
    removeSomeChar: (string, char, replace)=>{
        return string.replace(char, replace);
    }
}