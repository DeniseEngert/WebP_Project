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