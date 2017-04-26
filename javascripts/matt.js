// console.log("Be you");

var Translate = (function(){
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
        "happy" : "glücklich",
        "merry" : "fröhlich",
        "new" : "neu",
        "and" : "ein"
    };
    var translated = [];
    return {
        toGerman : function(textString) {
            var arrayWords = textString.split(" ");
            var newArray = [];
            var transArray = [];
            arrayWords.forEach(function(i){
                for (var j = 0; j < Object.keys(germanOb).length; j++) {
                    newArray = Object.keys(germanOb);
                    transArray = Object.values(germanOb);
                    // console.log(i, newArray[j]);
                    if(i === newArray[j]) {
                        translated += transArray[j] + " ";
                        arrayWords.push(translated);
                    }
                }
            });
            console.log(translated);
            return translated
        }
    }
})();

// Translate.toGerman("merry christmas");

