//Select the button element
const button=document.getElementById("myButton");
//Add click event listener
button.addElementListener("click",function() {
document.getElementById("message").innerHTML="Button was clicked!";
});