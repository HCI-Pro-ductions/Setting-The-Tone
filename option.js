// Saves options to chrome.storage
  function saveTone() {
    console.log("stuff");
    haveFetched = false;
    var toneChoice = document.getElementById('tone').value;
    chrome.storage.sync.set({
      toneChoice: toneChoice,
    })
    console.log(toneChoice);
    chrome.tabs.query({active: true, currentWindow: true}).then(resp=>{
      const tabId = resp[0];
      chrome.scripting.executeScript(
        {
          target: {tabId: tabId['id']},
          func: removeIndicators,
        },
        () => {});
    })
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

  function removeIndicators(){
    console.log("removing...");
    var element = document.getElementsByTagName("indicator"), index;

    for (index = element.length - 1; index >= 0; index--) {
      element[index].parentNode.removeChild(element[index]);
    }
  }

  document.addEventListener('DOMContentLoaded', restoreTone);
  document.getElementById('tone').addEventListener('change', saveTone);
