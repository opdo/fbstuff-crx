console.log('VinhPham');
function _get_like() {
	$like_button = $(".UFILikeLink._4x9_").not( ".UFILinkBright" );
	return $like_button.length;
}
function _like() {
	$like_button = $(".UFILikeLink._4x9_").not( ".UFILinkBright" );
	$like_button.each( function (index) { this.click(); });
	return $like_button.length;
}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("sent from the extension");
    if (request.vinhlike == "like") {
		$count_likes = _like();
		sendResponse({number: $count_likes});
	}
	if (request.vinhlike == "getlike") {
		$count_likes = _get_like();
		sendResponse({number: $count_likes});
	}
});