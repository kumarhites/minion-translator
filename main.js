const translateBtn = document.querySelector("#submit");
const userInput = document.querySelector("#input");
const output = document.querySelector(".output");
const url = "https://api.funtranslations.com/translate/minion.json";

function createUrl(text){
    return encodeURI(url+"?"+"text="+text);
}
function errorHandler(error){
    console.log("Error: "+error);
    alert("looks like the server is down, Please try again later!");
}
function translate(){
    fetch(createUrl(userInput.value))
        .then(response => response.json())
        .then(json => {
            output.innerText = json.contents.translated;
        })
        .catch(errorHandler);
}
translateBtn.addEventListener("click", translate);