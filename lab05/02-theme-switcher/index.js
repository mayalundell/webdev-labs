/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
const classDefault = () => {

   document.querySelector("body").className = "default";
   
};

const classOcean = () => {

   document.querySelector("body").className = "ocean";
   
};

const classDesert = () => {

   document.querySelector("body").className = "desert";
   
};

const classHighContrast = () => {

   document.querySelector("body").className = "high-contrast";
   
};

document.getElementById("default").addEventListener('click', classDefault);
document.getElementById("ocean").addEventListener('click', classOcean);
document.getElementById("desert").addEventListener('click', classDesert);
document.getElementById("high-contrast").addEventListener('click', classHighContrast);