var screenshot = {

	init: function() {
		chrome.browserAction.onClicked.addListener(function(tab) {
			chrome.tabs.captureVisibleTab(null, {
				format : "png",
				quality : 100
			}, function(data) {
				let name = tab.url
				name = name.substring(name.lastIndexOf("@") + 1, name.lastIndexOf("m"));
				chrome.downloads.download({
   				    url: data,
   		     		filename: "maps/" + name + ".png"
				});
			});
		});
	}
};

screenshot.init();
