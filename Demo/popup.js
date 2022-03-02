console.log("Popup working....");
let sender = "Unknow person"

var tg
chrome.runtime.sendMessage({ type: "getsender" }, function (dd) {
    if (typeof dd == "undefined") {
        console.log("inside if", dd);
    } else {
        console.log("outside if", dd);
        tg = dd
        document.getElementById('senderName').innerHTML = dd
    }
});



var button = document.createElement("button");
var button2 = document.createElement("button");

button.innerHTML = "Search sender details";
button2.innerHTML = "Change sender name";

var body = document.getElementsByTagName("div")[0];
body.appendChild(button);
body.appendChild(button2)

button.addEventListener("click", function () {
    window.open(`https://www.google.com/search?q=${tg}&hl=en`);
});


fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then((datas) => setData(datas))

function setData(data) {



    button2.addEventListener("click", function () {
        let no = Math.floor(Math.random() * 10);
        console.log("Noumnb", no);
        console.log("popup button..", data[no].name);
        var updateTextTo = data[no].name;
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { greeting: updateTextTo }, function (response) {
                console.log(response.farewell);
            });
        });
    });

}


