document.addEventListener('DOMContentLoaded', function () {
	chrome.tabs.executeScript(null, { "code": "window.getSelection().toString()" }, function (selection) {
		if (selection && selection[0] != "") {

			var url = 'https://2gis.ru/novosibirsk/search/' + selection[0];

			chrome.tabs.create({ 'url': url });
		}
		else document.getElementById("output").innerHTML = "Необходимо выделить адрес";
	});
});