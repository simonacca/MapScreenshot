var screenshot = {

	takeScreenshot: function(){
		chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.captureVisibleTab(null, {
			format : "png",
			quality : 100
		}, function(data) {
			let name = tab.url
			name = /@([^m]+)m/.exec(name);
			console.log(name)

			chrome.downloads.download({
				url: data,
				filename: "maps/" + name[1] + ".png"
			});
		});
    });
	},
	init: function() {
		chrome.browserAction.onClicked.addListener(function(tab) {
			screenshot.takeScreenshot()
		});
		chrome.commands.onCommand.addListener(function(command) {
			switch(command){
				case 'take-screenshot': {
					screenshot.takeScreenshot()
				}
			}
		});
      
	}
};

screenshot.init();
