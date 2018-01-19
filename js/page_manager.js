var rulesLink = document.getElementById('rules');
var leaderboardLink = document.getElementById('leaderboard');
var infoLink = document.getElementById('info');
var documentationLink = document.getElementById('documentation');
var overlay = document.getElementById('overlay');
var overlayHeadline = document.getElementById('overlay-headline');
var overlayText = document.getElementById('overlay-text');
var closingButton = document.getElementById('closing-button');

rulesLink.addEventListener('click', openRules, false);
leaderboardLink.addEventListener('click', openLeaderboard, false);
infoLink.addEventListener('click', openInfo, false);
documentationLink.addEventListener('click', openDocumentation, false);
closingButton.addEventListener('click', off, false);

function openRules(){
    overlay.style.display = "block";
    var text = JSON.parse(rulesContent);
    overlayHeadline.textContent = ("Rules");
    overlayText.innerHTML = text.rules;
    overlayText.innerHTML = overlayText.innerHTML.replace(/,/g,"<br>");
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

function openDocumentation() {
    overlay.style.display = "block";
    overlayHeadline.textContent = ("Documentation");
    var text = JSON.parse(documentationContent);
    overlayText.innerHTML = text.documentation;
}

function off() {
    if (overlay.style.display == "block"){
    overlay.style.display = "none";}
}