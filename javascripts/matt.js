

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
    return {
        toGerman : function(textString) {
            var arrayWords = textString.split(" ");
            for (var i = 0; i < arrayWords.length; i++) {
                console.log(arrayWords[i]);
                for(var j = 0; j < germanOb.length; j++) {
                    console.log(germanOb[j]);
                }
            }
        }
    }
})();


