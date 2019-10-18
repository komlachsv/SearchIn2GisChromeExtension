var clickHandler = function (e) {
    chrome.storage.sync.get({
        country: 'ru'
    }, function(items) {
        var searchUrl = 'https://2gis.' + items.country + '/search/';
        if (e.selectionText) {
            searchUrl += encodeURI(e.selectionText);
        }
        chrome.tabs.create({ "url": searchUrl });
    });
};

chrome.contextMenus.create({
    "title": "Найти в 2ГИС",
    "contexts": ["page", "selection"],
    "onclick": clickHandler
});