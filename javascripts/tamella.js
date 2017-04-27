var Translate = (function(){
    var alterdArray;
    var tamsObject = {
    merry: "alegre",
    christmas: "Navidad",
    holidays: "vacaciones",
    happy:"contento",
    new: "nuevo",
    year: "año",
    jingle: "tintineo",
    bells: "campanas",
    joy: "alegría",
    to: "a",
    the: "el",
    world: "mundo",
    let: "dejar",
    it: "eso",
    snow: "nieve",
    santa: "Santa",
    claus: "Claus"

    };
    return {
        toSpanish: function(textInput) {
            var translation = "";
            alterdArray = textInput.split(" ");
            for (var i = 0; i < alterdArray.length; i++) {
                var arrayWord = alterdArray[i];
                var match = false;
                for (prop in tamsObject) {
                    if (arrayWord === prop) {
                        translation += tamsObject[prop] + " ";
                        match = true;
                        break;
                    }
                }
                if (match === false) {
                    translation += arrayWord + " ";
                }
            }
            return translation;
        }
    };
})();

// var testingCode = translate.toSpanish("happy new year and please take your shoes off new");
// console.log("please do something you asshole", testingCode);

//var toDom = document.getElementById("outputText");
//
//var button = document.getElementById("trans-btn");
//button.addEventListener("click", clickEvent);
//
//
//function clickEvent (event) {
//    var inputText = document.getElementById("userInput").value;
//    var selected = document.getElementsByTagName("option");
//    console.log(selected.value, "which one");
//    for (var i = 0; i < selected.value; i++) {
//         if (selected[i].value === "spanish")
//
//
//        var spanishTrans = translate.toSpanish(inputText);
//        toDom.innerHTML = spanishTrans;
//
//    console.log("Hey lets make this work");
//    }
//
//}
