var rulesLink = document.getElementById('rules');
var leaderboardLink = document.getElementById('leaderboard');
var infoLink = document.getElementById('info');
var overlay = document.getElementById('overlay');


rulesLink.addEventListener('click', openRules, false);
leaderboardLink.addEventListener('click', openLeaderboard, false);
infoLink.addEventListener('click', openInfo, false);
overlay.addEventListener('click', off, false);

function openRules(){
    while (overlay.hasChildNodes()) {
        overlay.removeChild(overlay.lastChild);
    }
    overlay.style.display = "block";
    var div = document.createElement('div');
    var headlineText = document.createTextNode("Rules");
    var rulesText = document.createTextNode("1. Use keyboard arrows to move the tiles");
    var headline = document.createElement('h1');
    var rulesContainer = document.createElement('p');
    headline.setAttribute("class", "overlay-headline");
    rulesContainer.setAttribute("class", "overlay-text");
    div.setAttribute("class", "overlay-layout");
    headline.appendChild(headlineText);
    rulesContainer.appendChild(rulesText);
    div.appendChild(headline);
    div.appendChild(rulesContainer);
    overlay.appendChild(div);
}

function openLeaderboard() {
    overlay.style.display = "block";
    while (overlay.hasChildNodes()) {
        overlay.removeChild(overlay.lastChild);
    }
    overlay.style.display = "block";
    var div = document.createElement('div');
    var headlineText = document.createTextNode("Leaderboard");
    var leaderboardText = document.createTextNode("");
    var headline = document.createElement('h1');
    var leaderboardContainer = document.createElement('p');
    headline.setAttribute("class", "overlay-headline");
    leaderboardContainer.setAttribute("class", "overlay-text");
    div.setAttribute("class", "overlay-layout");
    headline.appendChild(headlineText);
    leaderboardContainer.appendChild(leaderboardText);
    div.appendChild(headline);
    div.appendChild(leaderboardContainer);
    overlay.appendChild(div);
}

function openInfo() {
    overlay.style.display = "block";
    overlay.style.display = "block";
    while (overlay.hasChildNodes()) {
        overlay.removeChild(overlay.lastChild);
    }
    overlay.style.display = "block";
    var div = document.createElement('div');
    var headlineText = document.createTextNode("Info");
    var infoText = document.createTextNode("");
    var headline = document.createElement('h1');
    var infoContainer = document.createElement('p');
    headline.setAttribute("class", "overlay-headline");
    infoContainer.setAttribute("class", "overlay-text");
    div.setAttribute("class", "overlay-layout");
    headline.appendChild(headlineText);
    infoContainer.appendChild(infoText);
    div.appendChild(headline);
    div.appendChild(infoContainer);
    overlay.appendChild(div);
}


function off() {
    if (overlay.style.display == "block"){
    overlay.style.display = "none";}
}