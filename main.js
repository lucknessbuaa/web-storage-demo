/**
 * 1.same origin share one storage
 * 2.when browser close when open again localStorage is still there
 * 3.different page has different sessionStorage
 */

// localStorage
var htmlElem = document.querySelector('html');
var pElem = document.querySelector('p');
var imgElem = document.querySelector('img');

var bgcolorForm = document.getElementById('bgcolor');
var fontForm = document.getElementById('font');
var imageForm = document.getElementById('image');

if(!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);
  localStorage.setItem('image', document.getElementById('image').value);

  setStyles();
}

function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}

bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
window.onstorage = setStyles;


// sessionStorage
// var htmlElem = document.querySelector('html');
// var pElem = document.querySelector('p');
// var imgElem = document.querySelector('img');

// var bgcolorForm = document.getElementById('bgcolor');
// var fontForm = document.getElementById('font');
// var imageForm = document.getElementById('image');

// if(!sessionStorage.getItem('bgcolor')) {
//   populateStorage();
// } else {
//   setStyles();
// }

// function populateStorage() {
//   sessionStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
//   sessionStorage.setItem('font', document.getElementById('font').value);
//   sessionStorage.setItem('image', document.getElementById('image').value);

//   setStyles();
// }

// function setStyles() {
//   var currentColor = sessionStorage.getItem('bgcolor');
//   var currentFont = sessionStorage.getItem('font');
//   var currentImage = sessionStorage.getItem('image');

//   document.getElementById('bgcolor').value = currentColor;
//   document.getElementById('font').value = currentFont;
//   document.getElementById('image').value = currentImage;

//   htmlElem.style.backgroundColor = '#' + currentColor;
//   pElem.style.fontFamily = currentFont;
//   imgElem.setAttribute('src', currentImage);
// }

// bgcolorForm.onchange = populateStorage;
// fontForm.onchange = populateStorage;
// imageForm.onchange = populateStorage;
// window.onstorage = setStyles;