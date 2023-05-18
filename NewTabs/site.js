"use strict";

window.onload = () => {
    const btngoogle = document.getElementById("btngoogle");
    const btnw3 = document.getElementById("btnw3");
    const btnimages = document.getElementById("btnimages");

    btngoogle.onclick = onbtngoogle;
    btnw3.onclick = onbtnw3;
    btnimages.onclick = onbtnimages;
};

let lastbutton;



function onbtngoogle(){
   window.open("https://www.google.com");
   lastbutton = "google!"
    console.log("google")
}

function onbtnw3(){
    lastbutton = "w3c schools!"
console.log("w3")

}

function onbtnimages(){
    lastbutton = "images;"
console.log("images")

}
