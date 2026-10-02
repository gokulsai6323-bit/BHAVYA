//Select the button
const button=document.getElementById("btn");
//Add an event listener
button.addEventListener("click",function() {
document.getElementById("heading").innerHTML=
"Button Clicked Successfully!";
alert("Hello! you Clicked the button.");
});