console.log("IIFE");
var Translate = (function (oldTranslate) {
var frenchText = {"merry":"Joyeux",
   "christmas":"Noel",
   "and":"et",
   "happy":"Bonne",
   "new":"nouvel",
   "year":"an",
   "jingle":"Tinter",
   "joy":"Joie",
   "holidays":"Vacances",
   "santa":"Père Noël",
   "snow":"neige",
   "a":"une"
                    };
                        oldTranslate.toFrench = function(englishtext){
                            var arraywords = englishtext.split(" ");
                            var translated = [];
                            for(var i = 0; i < arraywords.length;
                                i++){
                                console.log(arraywords[i]);
                                    for (var j = 0; j < Object.keys(frenchText).length; j++){
                                        console.log();
                                        var newArray = Object.keys(frenchText);
                                        var transArray = Object.values(frenchText);
                                        // console.log(i, newArray[j]);
                                          if(arraywords[i]=== newArray[j]) {
                                            translated += transArray[j] + " ";
                                            console.log(translated);
                                        }
                                    }
                            }
                            return translated;
                        }
                        return oldTranslate
})(Translate);
