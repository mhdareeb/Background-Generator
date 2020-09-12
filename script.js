function changeColor()
{
    console.log(color1.value,color2.value);
    body.style.background="linear-gradient(to right,"+ color1.value+","+ color2.value+")";
    h3.innerHTML=body.style.background;
}

var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementsByTagName("body")[0];
var h3=document.getElementsByTagName("h3")[0];

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);