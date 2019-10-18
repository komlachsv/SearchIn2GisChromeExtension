﻿// Saves options to chrome.storage
function save_options() {
    var country = document.getElementById('country').value;
    chrome.storage.sync.set({
        country: country
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Готово';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  function restore_options() {
    chrome.storage.sync.get({
        country: 'ru'
    }, function(items) {
      document.getElementById('country').value = items.country;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click', save_options);