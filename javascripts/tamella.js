console.log("let's get started");



var translate = (function(){
    console.log("tamsFunction Log", translate);
    var alterdArray;
    var tamsObject = {
    merry: "god",
    christmas: "jul",
    holidays: "och",
    happy:"gott",
    new: "nytt",
    year: "år",
    jingle: "poopie",
    bells: "poopsomemore",
    joy: "somejoy",
    to: "something",
    the: "anotherword",
    world: "morepoop",
    let: "letit",
    it: "butts",
    snow: "bigbutts",
    santa: "baby",
    claus: "yeah"

    };
    var emptyArray = [];
    return {
        toSpanish: function(textInput) {
            var translation = "";
            alterdArray = textInput.split(" ");
            for (var i = 0; i < alterdArray.length; i++) {
                console.log("logging new array", alterdArray[i]);
                var arrayWord = alterdArray[i];
                for (prop in tamsObject) {
                    var keysInObject;
//                    console.log("logging keys in object", prop);

                    if (arrayWord === prop) {
//                        console.log("found a matching word in object");
                        translation += tamsObject[prop] + " ";
                    } else {
                        translation += arrayWord + " ";
                    }
                }


            }
//           return emptyArray.push(translation);
            return translation;
        }

    };
})();

translate.toSpanish("happy new year");


//var button = document.getElementById("button");
//button.addEventListener("click", clickEvent);
//
//
//function clickEvent (event) {
//    var selected = document.getAttribute("name-selected-buttons");
//
//    if () {}
//}
