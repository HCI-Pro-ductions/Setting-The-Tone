// Saves options to chrome.storage
  function saveTone() {
    console.log("stuff");
    var toneChoice = document.getElementById('tone').value;
    chrome.storage.sync.set({
      toneChoice: toneChoice,
    })
    console.log(toneChoice);
  }
  
  // Restores select box state using the preferences
  // stored in chrome.storage.
  
  function restoreTone() {
    // Use default value = '.com' 
    chrome.storage.sync.get({
      toneChoice: '.com',
    }, function(items) {
      if(document.getElementById('tone').value==null){
        document.getElementById('tone').value = "sarcasm";
        saveTone();
      }
      document.getElementById('tone').value = items.toneChoice;
    });
  }

  document.addEventListener('DOMContentLoaded', restoreTone);
  document.getElementById('tone').addEventListener('change', saveTone);