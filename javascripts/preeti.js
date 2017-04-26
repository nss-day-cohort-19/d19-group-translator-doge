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
    "a":"une",
     				};
     					oldTranslate.toFrench = function(englishtext){
     						var arraywords = englishtext.split("");
     						for(var i = 0; i < arraywords.length;
     							i++){
     							console.log(arraywords[i]);


     						for(var j = 0; j < frenchText.length; j++){

     						}

     							console.log(frenchText[j]);
     						}
     					}
                    return oldTranslate
     			})(Translate);



   //  french.translateToFrench = function() {

/*}(translateText);
Merry Christmas
Happy Holidays
Happy New Year
Vacances
Jingle Bells
Joy to the world
Let it snow
Santa Claus*/
