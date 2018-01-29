var rulesLink = document.getElementById('rules');
var leaderboardLink = document.getElementById('leaderboard');
var infoLink = document.getElementById('info');
var overlay = document.getElementById('overlay');
var overlayHeadline = document.getElementById('overlay-headline');
var overlayText = document.getElementById('overlay-text');
var closingButton = document.getElementById('closing-button');

//MHMH
var restart4x4Button = document.getElementById('restart4x4');
var restart5x5Button = document.getElementById('restart5x5');
var restart6x6Button = document.getElementById('restart6x6');

rulesLink.addEventListener('click', openRules, false);
leaderboardLink.addEventListener('click', openLeaderboard, false);
infoLink.addEventListener('click', openInfo, false);
closingButton.addEventListener('click', off, false);

//MHMH
restart4x4Button.addEventListener('click', window.switch_to_4x4, false);
restart5x5Button.addEventListener('click', window.switch_to_5x5, false);
restart6x6Button.addEventListener('click', window.switch_to_6x6, false);

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