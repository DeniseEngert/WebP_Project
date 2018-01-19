var rulesLink = document.getElementById('rules');
var leaderboardLink = document.getElementById('leaderboard');
var infoLink = document.getElementById('info');
var overlay = document.getElementById('overlay');
var overlayHeadline = document.getElementById('overlay-headline');
var overlayText = document.getElementById('overlay-text');
var closingButton = document.getElementById('closing-button');

var rulesContent = '{"rules":["1. Use the keyboard arrows to move the tiles and join equal numbers.",' +
    '"2. The objective is to get the number 2048 exponentiating the number two and its multiples.",'+
    '"3. In the grid of 16 tiles you will initially be given two number twos or a number four.",'+
    '"4. When two equal numbers are in touch: they will add up.",' +
    '"5. With every move made the game will provide us another number.",' +
    '"6. If there are no free tiles on our grid: the game ends."]}';

rulesLink.addEventListener('click', openRules, false);
leaderboardLink.addEventListener('click', openLeaderboard, false);
infoLink.addEventListener('click', openInfo, false);
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

function off() {
    if (overlay.style.display == "block"){
    overlay.style.display = "none";}
}