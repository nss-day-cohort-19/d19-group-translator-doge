$(document).ready(function() {
    $('select').material_select();
  });


"use strict";

var output = {};

var btn = document.getElementById('trans-btn');
  console.log(btn);
var textInput = document.getElementById('userInput');
  console.log(textInput);
var lang = document.getElementById('lang');
  console.log(lang);
var outputBox = document.getElementById('outputText');

//event listeners (idk if this will work...or if it makes sense....but
//  I think this is what y'all meant when we realized the previous plan
//  exceeded MVP. Let's go through it together to make sure I typed it out
//  how we intended)
btn.addEventListener("click", checkLang);


function checkLang(e){
    // console.log('checkLang wants to run real bad');
  var textValue = "";
  var langValue = "";
  textValue = textInput.value.toLowerCase();
    // console.log('HOLLABACK, TEXTINPUT!!: ', textValue);
  langValue = lang.value;
    // console.log('HOLLABACK, LANGUAGE!!: ', langValue);

  switch (langValue) {

    // case "doge":
    // Translate.toDoge(textValue);
    // break;

    case "spanish":
    outputBox.innerHTML = Translate.toSpanish(textValue);
    break;

    case "german":
    outputBox.innerHTML = Translate.toGerman(textValue);
    break;

    case "french":
    outputBox.innerHTML = Translate.toFrench(textValue);
    break;

    default:
    alert("WHY YOU NO SELECT LANGUAGE?");
  }
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
