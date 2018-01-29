// Pagemanager komplette Eigenentwicklung
// Überführung der Menü-Elemente in Variabeln
// Variable i für Wikipedia-Inhalt

var rulesLink = document.getElementById('rules');
var leaderboardLink = document.getElementById('leaderboard');
var infoLink = document.getElementById('info');
var documentationLink = document.getElementById('documentation');
var overlay = document.getElementById('overlay');
var overlayHeadline = document.getElementById('overlay-headline');
var overlayText = document.getElementById('overlay-text');
var closingButton = document.getElementById('closing-button');
var i = "";

// Klick-Events hinzufügen
rulesLink.addEventListener('click', openRules, false);
leaderboardLink.addEventListener('click', openLeaderboard, false);
infoLink.addEventListener('click', openInfo, false);
documentationLink.addEventListener('click', openDocumentation, false);
closingButton.addEventListener('click', off, false);

// Rules-Overlay anzeigen
// Inhalt aus JSON-Datei lesen und per DOM einfügen 
function openRules(){
    overlay.style.display = "block";
    var text = JSON.parse(rulesContent);
    overlayHeadline.textContent = ("Rules");
    overlayText.innerHTML = text.rules;
    overlayText.innerHTML = overlayText.innerHTML.replace(/,/g,"<br>");
}

// Rules-Overlay anzeigen
// Inhalt aus DB anzeigen
function openLeaderboard() {
    overlay.style.display = "block";
    overlayHeadline.textContent = ("Leaderboard");
    overlayText.innerHTML =  '<table class="score-table">' +
        '<th class="table-header">Name</th>'+
        '<th class="table-header">Score</th>'+
        '<tr class="table-row">'+
            '<td class="table-data">test</td>'+
            '<td class="table-data">test</td></tr>'+
        '<tr class="table-row" id="tr-one">'+
            '<td class="table-data">test</td>'+
            '<td class="table-data">test</td></tr>'+
        '<tr class="table-row" id="tr-two">'+
            '<td class="table-data">test</td>'+
            '<td class="table-data">test</td></tr>'+
        '<tr class="table-row"id="tr-three">'+
            '<td class="table-data">test</td>'+
            '<td class="table-data">test</td></tr>'+
        '<tr class="table-row" id="tr-four">'+
            '<td class="table-data">test</td>'+
            '<td class="table-data">test</td></tr>'+
        '<tr class="table-row" id="tr-five">'+
            '<td class="table-data">test</td>'+
            '<td class="table-data">test</td></tr>'+
        '<tr class="table-row" id="tr-six">'+
            '<td class="table-data">test</td>'+
            '<td class="table-data">test</td></tr>'+
        '<tr class="table-row">'+
            '<td class="table-data" id="tr-seven">test</td>'+
            '<td class="table-data">test</td></tr>'+
        '<tr class="table-row" id="tr-eight">'+
            '<td class="table-data">test</td>'+
            '<td class="table-data">test</td></tr>'+
        '<tr class="table-row" id="tr-nine">'+
            '<td class="table-data">test</td>'+
            '<td class="table-data">test</td></tr>'+
        '<tr class="table-row" id="tr-ten">'+
            '<td class="table-data">test</td>'+
            '<td class="table-data">test</td></tr>'

}

// Info-Overlay anzeigen
// Inhalt per DOM einfügen
// twitter-Link und twitter-Icon per DOM einfügen
// i enthält Wikipedia-Inhalt
function openInfo() {
    overlay.style.display = "block";
    overlayHeadline.textContent = ("Info");
    overlayText.innerHTML = (i.html());
    var linkcontainer = document.createElement('div');
    linkcontainer.textContent = ("Gabriele Cirulli on ");
    linkcontainer.setAttribute("class", "twitter-link");
    var twittericon = document.createElement('img');
    twittericon.setAttribute("src", "icons/twitter-icon.png");
    twittericon.setAttribute("class", "link-icon");
    var twitterlink = document.createElement('a');
    twitterlink.setAttribute("href", "https://twitter.com/gabrielecirulli?ref_src=twsrc%5Etfw");
    twitterlink.appendChild(twittericon);
    linkcontainer.appendChild(twitterlink);
    overlayText.appendChild(linkcontainer);
}

// Documentation-Overlay anzeigen
// Inhalt aus JSON-Datei lesen und per DOM einfügen
// iframe mit Anzeige der PDF-Datei aus Google-Drive
function openDocumentation() {
    overlay.style.display = "block";
    overlayHeadline.textContent = ("Documentation");
    var text = JSON.parse(documentationContent);
    overlayText.innerHTML = text.documentation;
    var pdfcontainer = document.createElement('div');
    pdfcontainer.innerHTML = ('<iframe src="https://drive.google.com/file/d/1iIdQecmZv-CedchOMoOKJyREa7UPK8-P/preview" width="640" height="480"></iframe>');
    overlayText.appendChild(pdfcontainer);
}

// Ausblenden des Overlay
function off() {
    if (overlay.style.display == "block"){
    overlay.style.display = "none";}
    overlayText.textContent = ("");
}

// Einbindung Wikipedia-Artikel, Speichern in Variable i
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=2048_(video_game)&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            var markup = data.parse.text["*"];
            i = $('<div></div>').html(markup);
            $('#article').html($(blurb).find('p'));

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