var ruleslink = document.getElementById('rules');
var leaderboardlink = document.getElementById('leaderboard');
var infolink = document.getElementById('info');
var contentbox;

ruleslink.addEventListener('click', openrules, false);
leaderboardlink.addEventListener('click', openleaderboard, false);
infolink.addEventListener('click', openinfo, false);

function openrules(e) {
    e.preventDefault();
    contentbox = document.createElement('div');
    ruleslink.appendChild(contentbox);
    contentbox.setAttribute("class", "content-overlay");
}
function openleaderboard(e) {
    e.preventDefault();

}
function openinfo(e) {
    e.preventDefault();

}