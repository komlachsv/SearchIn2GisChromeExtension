document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get({
        country: 'ru'
      }, function(items) {
        chrome.tabs.executeScript(null, { "code": "window.getSelection().toString()" }, function (selection) {
            if (selection && selection[0] != "") {
                var url = 'https://2gis.' + items.country + '/search/' + encodeURI(selection[0]);
                chrome.tabs.create({ 'url': url });
            }
            else
                document.getElementById("output")
                    .innerHTML = "<p>Необходимо выделить текст, либо перейти на <a href='https://2gis." + items.country + "' target='_blank'>www.2gis." + items.country + "</a></p>";
        });
      });

      document.querySelector('#go-to-options').addEventListener('click', function() {
        if (chrome.runtime.openOptionsPage) {
          chrome.runtime.openOptionsPage();
        } else {
          window.open(chrome.runtime.getURL('options.html'));
        }
      });
});