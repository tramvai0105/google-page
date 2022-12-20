const input = document.querySelector('#input')
const searchButton = document.querySelector('#search-button')
const clearButton = document.querySelector('.clear-icon')
const doodleButton = document.querySelector("#doodle")

var focus = true;

var url = "https://www.google.ru/search?q=";

input.addEventListener("focus", (e)=>{
    focus = true;
})

input.addEventListener("blur", (e)=>{
    focus = false;
})

oninput = (e) =>{
    if(input.value.length > 0){
        clearButton.style.display = "block";
    } else {
        clearButton.style.display = "none";
    }
}

clearButton.onclick = () => {
    input.value = ""
    clearButton.style.display = "none";
}

searchButton.addEventListener("click", (e)=>{
    if(input.value.length > 0){DoGoogleSearch()}
})

doodleButton.addEventListener("click", (e)=>{
    window.location = "https://www.google.com/doodles"
})

function DoGoogleSearch(){
    url = url + input.value;
    window.location = url;
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter' && input.value.length > 0 && focus) {
        DoGoogleSearch()
    }
  });