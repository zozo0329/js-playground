let no = document.getElementById("no");
let no2 = document.getElementById("btn2");
let no3 = document.getElementById("btn3");
let no4 = document.getElementById("btn4");

// AUDIO

let boom = new Audio();
boom.src = "audio/BOOM sound effect.mp3";
let poop = new Audio();
poop.src = "poop.mp3";

// IMAGES

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

// FUNCTIONS

function ohNo() {
  no.style.visibility = "hidden";
  no2.style.visibility = "visible";
  img1.style.display = "none";
  img2.style.display = "block";
}
function ohNo2() {
  no2.style.visibility = "hidden";
  no3.style.visibility = "visible";
  img2.style.display = "none";
  img3.style.display = "block";
}
function ohNo3() {
  no3.style.visibility = "hidden";
  no4.style.visibility = "visible";
  img3.style.display = "none";
  img4.style.display = "block";
}
