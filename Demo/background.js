console.log("Running ackground...");
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "sender":
                temp = message.dd;
                console.log("Inside case",temp);
                break;
            default:
                console.log("Unrecognised message: ", message);
        }
    }
);

chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        switch(message.type) {
            case "sender":
                temp = message.dd;
                break;
            case "getsender":
                sendResponse(temp);
                break;
            default:
                console.log("Unrecognised message: ", message);
        }
    }
);