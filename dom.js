function test(){
 alert("Greetings!")
}

test();

let dark = false;

let myButton = document.querySelector("Button")

function handleClick(){
    alert("Button :o")
}

myButton.addEventListener('click',handleClick)

function darkMode(){
 document.body.style.backgroundColor = "rgb(0,0,0)"
 document.querySelector("#texty").
 dark = true;gi
}

myButton.addEventListener('click', darkMode)