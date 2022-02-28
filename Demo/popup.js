console.log("Popup working....");
let sender="Unknow person"

var tg
chrome.runtime.sendMessage({type: "getsender"}, function(dd) {
    if(typeof dd == "undefined") {
        console.log("inside if",dd);
    } else {
        console.log("outside if",dd);
        tg=dd
        document.getElementById('senderName').innerHTML=dd
    }
});

var button = document.createElement("button");
button.innerHTML = "Search sender details";

// 2. Append somewhere
var body = document.getElementsByTagName("div")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
    window.open(`https://www.google.com/search?q=${tg}&hl=en`);
});