"use strict";

window.onload = () => {

    document.getElementsByIdClassName("imageGroup")= "imageGroup";
  
    
};


function imageBorder(){
    console.log("1");

    const allDivsWithmsgDivClass = document.getElementsByClassName("imageGroup");

    for (let div of allDivsWithmsgDivClass){
        div.style.border = "blue";
    }

}