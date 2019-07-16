var clickHandler = function (e) {
	var searchUrl = 'https://2gis.ru/search/';

	if (e.selectionText) {
		searchUrl += encodeURI(e.selectionText);
	}

	chrome.tabs.create({ "url": searchUrl });
};

chrome.contextMenus.create({
	"title": "Найти в 2ГИС",
	"contexts": ["page", "selection"],
	"onclick": clickHandler
});