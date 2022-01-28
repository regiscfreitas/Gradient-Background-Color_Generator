let gradientColor = document.querySelector("h3");
let color1 = document.querySelector(".color1")
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let body = document.querySelector("body")

// -> funnctions that recovery the values of the color in the input
function recoveryColor1(){ 
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"; 
}
function recoveryColor2(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}
function recoveryColor3(){ 
    body.style.color = color3.value;
}

// -> function that will display the gradient in the h3 tag
function displayGradient(){ 
    let backgroundGradient = document.querySelector("body").style.background;
    gradientColor.innerText = backgroundGradient;
    
}



color1.addEventListener("input", recoveryColor1);
color1.addEventListener("input", displayGradient);
color2.addEventListener("input", recoveryColor2);
color2.addEventListener("input", displayGradient);
color3.addEventListener("input", recoveryColor3);