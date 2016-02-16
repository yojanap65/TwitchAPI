var streamCount = $("#streamCount");
var streamList = $("#listBody");
var streamData = null;

// Retrieve through Twitch API
var getTwitchData = function (page) {
    var queryText = $("#textQuery").value;
    var queryPath = streamData ? streamData._links[page] : "https://api.twitch.tv/kraken/search/streams?q=" + queryText;

    emptyStreamList();
    tempNavDisable();
    clearSearchBar();

    var twitchQuery = new XMLHttpRequest();
    twitchQuery.open("GET", queryPath, true);
    twitchQuery.onload = function (e) {
        if (twitchQuery.readyState === 4 && twitchQuery.status === 200) {
            streamData = JSON.parse(twitchQuery.responseText);
            putDataCount(streamData);
            setPageLimit(streamData);
            loadStreamsList(streamData);
            navigateButtons();
        } else {
            console.error(twitchQuery.statusText);
        }
    };
    twitchQuery.send();
};

// Search Videos
var searchButton = $("#searchQuery");
searchButton.addEventListener("click", newDataReset, false);
searchButton.addEventListener("click", getTwitchData, false);

// Navigate multiple pages(Previous page)
var prevPage = $("#prevPage");
prevPage.addEventListener("click", function () { getTwitchData("prev"); }, false);
prevPage.addEventListener("click", function () { setPageNumber("prev"); }, false);

// Navigate multiple pages(Next page)
var nextPage = $("#nextPage");
nextPage.addEventListener("click", function () { getTwitchData("next"); }, false);
nextPage.addEventListener("click", function () { setPageNumber("next"); }, false);




