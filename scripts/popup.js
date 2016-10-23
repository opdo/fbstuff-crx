count();
setInterval(count, 1000);
function count() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {vinhlike: "getlike"}, function(response) {
		$("#count_likes").html(response.number);
		console.log(response.number);
	  });
	});
}
function like() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {vinhlike: "like"}, function(response) {
		$("#title").html('Đã like <b>'+response.number+'</b> đối tượng');
		console.log(response.number);
	  });
	});
}
document.getElementById('link').onclick = like;
