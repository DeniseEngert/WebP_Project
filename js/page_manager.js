var rulesLink = document.getElementById('rules');
var leaderboardLink = document.getElementById('leaderboard');
var infoLink = document.getElementById('info');
var overlay = document.getElementById('overlay');


rulesLink.addEventListener('click', openRules, false);
leaderboardLink.addEventListener('click', openLeaderboard, false);
infoLink.addEventListener('click', openInfo, false);
overlay.addEventListener('click', off, false);

function openRules(){
    overlay.style.display = "block";
    var headlineText = document.createTextNode("Rules");
    var rulesText = document.createTextNode("1. Use keyboard arrows to move the tiles");
    var headline = document.createElement('h1');
    var rulesContainer = document.createElement('p');
    headline.setAttribute("class", "overlay-headline");
    rulesContainer.setAttribute("class", "overlay-text");
    headline.appendChild(headlineText);
    rulesContainer.appendChild(rulesText);
    overlay.appendChild(headline);
    overlay.appendChild(rulesContainer);
}

function openLeaderboard() {
    overlay.style.display = "block";
}
function openInfo() {
    overlay.style.display = "block";
}


function off() {
    if (overlay.style.display == "block"){
    overlay.style.display = "none";}
}