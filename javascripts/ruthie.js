"use strict";

var Translate = (function(oldTranslate) {
  var Doge = {
    merry: "",
    christmas: "",
    and: "",
    happy: "",
    new: "",
    year: "",
    jingle: "",
    joy: "",
    holidays: "",
    santa: "",
    snow: "",
    a: "",    
  }

  oldTranslate.getDoge = function(textValue) {
    var splitString = "";
    var dogeOutput = "";

    splitString = textValue.split(" ");
    splitString.forEach(function(word) {
      //this should make the original 'printToDom'
      // function work as intended.
      dogeOutput += `${Doge[word]}`;
    });

    print(dogeOutput);
    return dogeOutput;

  }
    return oldTranslate;
})(Translate);