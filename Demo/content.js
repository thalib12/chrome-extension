
console.log("Updated....");

window.addEventListener('popstate', function (event) {
  let data = document.getElementsByClassName("gD")
  let dd = data[0].innerText
  console.log("hello", dd);
  chrome.runtime.sendMessage({ type: "sender", dd: dd });
});


chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url : request);
    document.getElementsByClassName("gD")[0].innerText = request.greeting
    if (request.greeting === "hello")
      sendResponse({ farewell: "goodbye" });
  }
);






