var rulesLink = document.getElementById('rules');
var leaderboardLink = document.getElementById('leaderboard');
var infoLink = document.getElementById('info');
var documentationLink = document.getElementById('documentation');
var overlay = document.getElementById('overlay');
var overlayHeadline = document.getElementById('overlay-headline');
var overlayText = document.getElementById('overlay-text');
var closingButton = document.getElementById('closing-button');
var shareScore = document.getElementsByClassName('share-score');

rulesLink.addEventListener('click', openRules, false);
leaderboardLink.addEventListener('click', openLeaderboard, false);
infoLink.addEventListener('click', openInfo, false);
documentationLink.addEventListener('click', openDocumentation, false);
closingButton.addEventListener('click', off, false);
shareScore.addEventListener('click', share, false);

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
    overlayText.innerHTML = (i.html());
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

function share() {
    return score;
}

$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "http://de.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=2048_(Computerspiel)&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {

            var markup = data.parse.text["*"];
            i = $('<div></div>').html(markup);

            // remove links as they will not work
            i.find('a').each(function () {
                $(this).replaceWith($(this).html());
            });

            // remove any references
            i.find('sup').remove();

            // remove cite error
            i.find('.mw-ext-cite-error').remove();

            //$('#info').html($(i).find('p'));


        },
        error: function (errorMessage) {
        }
    });

});