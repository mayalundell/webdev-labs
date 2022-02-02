const makeBigger = () => {

   var header = document.querySelector("header");
   var headerStyle = window.getComputedStyle(header, null).getPropertyValue('font-size');
   var hfontSize = parseFloat(headerStyle);

   var body = document.querySelector("p");
   var bodyStyle = window.getComputedStyle(body, null).getPropertyValue('font-size');
   var bfontSize = parseFloat(bodyStyle);

   header.style.fontSize = (hfontSize + 2) + 'px';
   body.style.fontSize = (bfontSize + 2) + 'px';



};

const makeSmaller = () => {

   var header = document.querySelector("header");
   var headerStyle = window.getComputedStyle(header, null).getPropertyValue('font-size');
   var hfontSize = parseFloat(headerStyle);

   var body = document.querySelector("p");
   var bodyStyle = window.getComputedStyle(body, null).getPropertyValue('font-size');
   var bfontSize = parseFloat(bodyStyle);

   header.style.fontSize = (hfontSize - 2) + 'px';
   body.style.fontSize = (bfontSize - 2) + 'px';
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

