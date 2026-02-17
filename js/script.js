document.addEventListener("DOMContentLoaded", () => {

const progressBar = document.querySelector(".progress-bar");

if(progressBar){
window.addEventListener("scroll", () => {
const scrollTop = document.documentElement.scrollTop;
const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scrollTop / scrollHeight) * 100;
progressBar.style.width = progress + "%";

document.body.style.setProperty(
"--scrollY",
window.scrollY * 0.15 + "px"
);
});
}

/* Emoji Loop */

const emoji = document.getElementById("love-emoji");

if(emoji){

const text = "💖";

function loop(){

let i = 0;

function type(){
if(i < text.length){
emoji.innerHTML += text.charAt(i);
i++;
setTimeout(type,200);
}else{
setTimeout(erase,1200);
}
}

function erase(){
if(emoji.innerHTML.length > 0){
emoji.innerHTML = "";
setTimeout(loop,600);
}
}

type();
}

setTimeout(loop,800);
}

});

// ===== TROLL FLOW UPGRADE =====

const startBtn = document.getElementById("startBtn");
const modal = document.getElementById("trollModal");
const questionText = document.getElementById("questionText");
const modalActions = document.getElementById("modalActions");
const mathBox = document.getElementById("mathBox");
const errorMsg = document.getElementById("errorMsg");

let step = 1;

if(startBtn){
startBtn.addEventListener("click", () => {
modal.classList.add("active");
});
}

// tombol Yes / No
function nextStep(){

if(step === 1){
questionText.innerHTML = "Are you really sure?";
step++;
}
else if(step === 2){
modalActions.style.display = "none";
mathBox.style.display = "block";
}
}

function closeModal(){
modal.classList.remove("active");

setTimeout(() => {
step = 1;
questionText.innerHTML = "Are you sure?";
modalActions.style.display = "flex";
mathBox.style.display = "none";
errorMsg.innerHTML = "";
},300);
}

// ===== NO BUTTON RUN AWAY =====

const noButton = document.querySelector(".modal-actions button:nth-child(2)");

if(noButton){
noButton.classList.add("no-btn");

noButton.addEventListener("mouseenter", () => {
const randomX = Math.floor(Math.random() * 100 - 50);
const randomY = Math.floor(Math.random() * 60 - 30);
noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
}

// ===== CHECK ANSWER =====

function checkAnswer(){
const answer = document.getElementById("answerInput").value;

if(answer == "2"){
window.location.href = "story1.html";
}else{
errorMsg.innerHTML = "Hmm... you sure about that? 😏";
}
}

// ===== CINEMATIC ENDING =====

const backHome = document.getElementById("backHome");
const endingOverlay = document.getElementById("endingOverlay");
const endingText = document.getElementById("endingText");

if(backHome){
backHome.addEventListener("click", (e) => {
e.preventDefault();

endingOverlay.classList.add("active");

setTimeout(() => {
endingText.innerHTML = "This is not the end.";
endingText.classList.add("show");
}, 800);

setTimeout(() => {
endingText.classList.remove("show");
}, 2800);

setTimeout(() => {
endingText.innerHTML = "This is just another beginning.";
endingText.classList.add("show");
}, 3500);

setTimeout(() => {
window.location.href = "index.html";
}, 6500);

});
}
