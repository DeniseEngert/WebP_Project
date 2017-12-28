var rulesLink = document.getElementById('rules');
var leaderboardLink = document.getElementById('leaderboard');
var infoLink = document.getElementById('info');
var overlay = document.getElementById('overlay');
var overlayHeadline = document.getElementById('overlay-headline');
var overlayText = document.getElementById('overlay-text');


rulesLink.addEventListener('click', openRules, false);
leaderboardLink.addEventListener('click', openLeaderboard, false);
infoLink.addEventListener('click', openInfo, false);
overlay.addEventListener('click', off, false);

function openRules(){
    overlay.style.display = "block";
    overlayHeadline.textContent = ("Rules");
    overlayText.textContent = ("1. Move the tiles using the keyboard arrows.");
}

function openLeaderboard() {
    overlay.style.display = "block";
    overlayHeadline.textContent = ("Leaderboard");
    overlayText.textContent = ("");
}

function openInfo() {
    overlay.style.display = "block";
    overlayHeadline.textContent = ("Info");
    overlayText.textContent = ("");
}


function off() {
    if (overlay.style.display == "block"){
    overlay.style.display = "none";}
}