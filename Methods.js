// On load
var $ = function (element) {
    return document.getElementById(element.slice(1));
};

// Usage of navigation buttons
var tempNavDisable = function () {
    $("#prevPage").disabled = true;
    $("#nextPage").disabled = true;
};
var clearSearchBar = function () {
    $("#textQuery").value = "";
};
var newDataReset = function () {
    streamData = null;
    $("#currentPage").innerText = 1;
};

var emptyStreamList = function () {
    while (streamList.lastChild) {
        streamList.removeChild(streamList.lastChild);
    }
};

var setPageLimit = function (data) {
    $("#pageLimit").innerText = Math.ceil(data._total / 20);
};
var navigateButtons = function () {
    if ($("#currentPage").innerText == 1) {
        $("#prevPage").disabled = true;
    } else {
        $("#prevPage").disabled = false;
    }
    if ($("#currentPage").innerText !== $("#pageLimit").innerText) {
        $("#nextPage").disabled = false;
    } else {
        $("#nextPage").disabled = true;
    }
};

var putDataCount = function (data) {
    $("#streamCount").innerText = data._total;
};

var loadStreamsList = function (data) {
    data.streams.forEach(appendStreamData);
};
var setPageNumber = function (direction) {
    var currentValue = $("#currentPage").innerText;
    if (direction === "prev") {
        $("#currentPage").innerText = JSON.parse(currentValue) - 1;
    }
    if (direction === "next") {
        $("#currentPage").innerText = JSON.parse(currentValue) + 1;
    }

};

