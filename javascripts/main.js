"strict";

var output = {};

var btn = document.getElementById('trans-btn');
  console.log(btn);
var textInput = document.getElementById('userInput');
  console.log(textInput);
var lang = document.getElementById('lang');
  console.log(lang);
var outputBox = document.getElementById('outputText');

//event listeners
btn.addEventListener("click", checkLang)


function checkLang(e){
  console.log('checkLang wants to run real bad');
  var textValue = "";
  textValue = textInput.value.toLowerCase();
  console.log('text input: ', textValue);
  var langValue = "";
  langValue = lang.value;
  console.log('language: ', langValue);

  switch (langValue) {

    case "doge":
    Translator.getDoge(textValue);
    break;

    case "german":
    Translator.getGerman(textValue);
    break;

    case "spanish":
    Translator.getSpanish(textValue);
    break;

    default:
    alert("WHY YOU NO SELECT LANGUAGE?");
  }
}

function printToDom(outputString) {
  output.innerHTML = outputString;
}

 // if(lang.option === 'doge')