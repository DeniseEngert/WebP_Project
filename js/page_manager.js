var rulesLink = document.getElementById('rules');
var leaderboardLink = document.getElementById('leaderboard');
var infoLink = document.getElementById('info');
var overlay = document.getElementById('overlay');
var overlayHeadline = document.getElementById('overlay-headline');
var overlayText = document.getElementById('overlay-text');
var closingButton = document.getElementById('closing-button');

var rulesContent = '{"rules":["1. use tabs to navigate", "2....."]}';

rulesLink.addEventListener('click', openRules, false);
leaderboardLink.addEventListener('click', openLeaderboard, false);
infoLink.addEventListener('click', openInfo, false);
closingButton.addEventListener('click', off, false);

function openRules(){
    overlay.style.display = "block";
    var text = JSON.parse(rulesContent);
    overlayHeadline.textContent = ("Rules");
    overlayText.innerHTML = text.rules;
    overlayText.innerHTML = overlayText.innerHTML.replace(",","</br>");
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