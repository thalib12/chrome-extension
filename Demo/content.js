
console.log("new49");


window.onload = function() {
    console.log("Page lofde")
  };

  



window.addEventListener('popstate', function (event) {
	// The URL changed..
    console.log("URL Changed...");

// setTimeout(() => {
    let data=document.getElementsByClassName("gD")

//     var datas=document.getElementsByTagName("span")
  let  dd=data[0].innerText
console.log("hello",dd);

chrome.runtime.sendMessage({type: "sender", dd: dd});


// }, 1000);

});






