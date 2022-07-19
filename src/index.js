var onClick = function() {
    var value = this.getAttribute("value");

    let params = {
        active: true,
        currentWindow: true,
    }


    chrome.tabs.query(params, (tabs) => {
        const msg = {
            type: "action",
            value,
        }
        chrome.tabs.sendMessage(tabs[0].id, msg)
    })
};

var buttons = document.getElementsByClassName("action-button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onClick, false);
}
