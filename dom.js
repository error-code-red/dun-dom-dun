//function test(){
 //alert("Greetings!")
//}

//test();

let dark = false;

let myButton = document.querySelector("Button")

let texty = document.getElementById('message')

// function handleClick(){
  //  alert("Button :o")
// }

// myButton.addEventListener('click', handleClick)

function darkMode(){
 document.body.style.backgroundColor = "rgb(0,0,0)"
 texty.style.color = "rgb(225,225,225)"
 dark = true;
}

myButton.addEventListener('click', darkMode)