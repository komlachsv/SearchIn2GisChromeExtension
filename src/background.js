var clickHandler = function (e) {
	var searchUrl = 'https://2gis.ru/novosibirsk/search/';

	if (e.selectionText) {
		searchUrl += encodeURI(e.selectionText);
	}

	chrome.tabs.create({ "url": searchUrl });
};

chrome.contextMenus.create({
	"title": "Найти адрес в 2ГИС",
	"contexts": ["page", "selection"],
	"onclick": clickHandler
});