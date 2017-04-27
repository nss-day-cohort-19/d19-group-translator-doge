$(document).ready(function() {
    $('select').material_select();
  });


"use strict";

var btn = document.getElementById('trans-btn');
var textInput = document.getElementById('userInput');
var lang = document.getElementById('lang');
var outputBox = document.getElementById('outputText');

btn.addEventListener("click", checkLang);

function checkLang(e){
    var textValue = textInput.value.toLowerCase();
    var langValue = lang.value;
    var translatedText = "";

    switch (langValue) {

    // case "doge":
    // Translate.toDoge(textValue);
    // break;

        case "spanish":
            translatedText = Translate.toSpanish(textValue);
            break;

        case "german":
            translatedText = Translate.toGerman(textValue);
            break;

        case "french":
            translatedText = Translate.toFrench(textValue);
            break;

        default:
            alert("WHY YOU NO SELECT LANGUAGE?");
    }
    printToDom(translatedText);
}

function printToDom(outputString) {
    outputBox.innerHTML = outputString;
    if (outputString != "") {
        speak(outputString);
    }
}

function speak(outputString) {
    var speechOptions = new SpeechSynthesisUtterance();
    speechOptions.text = outputString;
    speechOptions.lang = 'en-US';
    speechSynthesis.speak(speechOptions);
}
