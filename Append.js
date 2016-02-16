var appendStreamData = function (data) {
    var streamBlock = createElement("tr", "streamBlocks");
    var tableImage = createElement("td", "tableImage");

    var imgAnchor = createElement("a");
    imgAnchor.href = data.channel.url;
    imgAnchor.target = "_blank";

    var streamImage = createElement("img");
    streamImage.href = data.channel.url;
    streamImage.src = data.preview.large;

    var streamInfo = createElement("td", "streamInfo");

    createStreamElements(streamInfo, "h2", "streamName", data.channel.display_name);
    createStreamElements(streamInfo, "span", "gameName", data.channel.game);
    createStreamElements(streamInfo, "span", "numberViewers", " - " + data.viewers + " viewers");
    createStreamElements(streamInfo, "p", "description", data.channel.status);


    appendChildren([imgAnchor, streamImage], [tableImage, imgAnchor], [streamBlock, tableImage], [streamBlock, streamInfo], [streamList, streamBlock]);
};

var createElement = function (tag, tagClass) {
    var element = document.createElement(tag);
    tagClass ? element.classList.add(tagClass) : element;
    return element;
}

var appendChildren = function () {
    for (var i = 0; i < arguments.length; i++) {
        arguments[i][0].appendChild(arguments[i][1]);
    }
}

var createStreamElements = function (appendingElement, tagName, tagClass, data) {
    var newElement = createElement(tagName);
    var tagData = document.createTextNode(data);
    newElement.classList.add(tagClass);
    appendChildren([newElement, tagData], [appendingElement, newElement]);
};


