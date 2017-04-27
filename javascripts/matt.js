// console.log("Be you");

var Translate = (function(oldTranslate){
    // var textString = "merry christmas and happy new year"
    var germanOb = {
        "christmas" : "Weihnachten",
        "holidays" : "Ferien",
        "year" : "Jahr",
        "jingle" : "klimpern",
        "bells" : "glocken",
        "joy" : "Freude",
        "snow" : "schnee",
        "santa" : "Weihnachtsmann",
        "happy" : "Glücklich",
        "merry" : "Fröhlich",
        "new" : "Neu",
        "and" : "ein",
        "fuck" : "Scheiße",
        "a" : "ein",
        "family" : "familie",
        "the" : "das",
            };


        oldTranslate.toGerman = function(textString) {
            var translated = [];
            var arrayWords = textString.split(" ");
            var newArray = [];
            var transArray = [];
            var newWord = false
            arrayWords.forEach(function(i){
                for (var j = 0; j < Object.keys(germanOb).length; j++) {
                    newArray = Object.keys(germanOb);
                    transArray = Object.values(germanOb);
                    // console.log(i, newArray[j]);
                    if(i === newArray[j]) {
                        translated += transArray[j] + " ";
                        break;
                    }else if(i !== newArray[j] && j === 15) {
                        translated += i + " ";
                    }
                }
            });
            console.log(translated);
            return translated
        }
    return oldTranslate
})(Translate);

// Translate.toGerman("merry christmas");

