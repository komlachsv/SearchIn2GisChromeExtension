document.addEventListener('DOMContentLoaded', function () {
	chrome.tabs.executeScript(null, { "code": "window.getSelection().toString()" }, function (selection) {
		if (selection && selection[0] != "") {

			var url = 'https://2gis.ru/search/' + selection[0];

			chrome.tabs.create({ 'url': url });
		}
		else document.getElementById("output").innerHTML = "<p>Необходимо выделить текст или можете перейти на <a href='https://2gis.ru' target='_blank'>www.2gis.ru</a></p>";
	});
});