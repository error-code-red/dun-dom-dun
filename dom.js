let dark = 0

let myButton = document.querySelector("Button")

let texty = document.getElementById('message')

 function darkMode() {
    document.body.style.backgroundColor = 'rgb(0,0,0)'
    texty.style.color = 'rgb(225,225,225)'
    myButton.innerHTML = "Light Mode"
}

 function lightMode(){
    document.body.style.backgroundColor = "rgb(225,225,225)"
    texty.style.color = "rgb(0,0,0)"
    myButton.innerHTML = "Dark Mode"
}
        
function checkLight() {
   

    if (dark === 0) {
        darkMode();
        //alert("DARK")
        dark = 1
    } 
    
    else {
        lightMode();
        //alert("LIGHT")
        dark = 0
    }
}


myButton.addEventListener('click', checkLight)