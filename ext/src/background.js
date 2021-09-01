const maxTabs = 10;

  chrome.tabs.onCreated.addListener(function(tab) {
      if (tab.url.indexOf("chrome-devtools://") == -1) {
          console.log("tabid "+tab.id);      
          chrome.tabs.query({active:false}, function(args){
            if(args.length > maxTabs){
              chrome.tabs.remove(tab.id)
            }
          })
      }
  });
