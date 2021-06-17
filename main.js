$(function() {
	$("a").click(function(e) {
		var pageurl = $(this).attr("href");
		var $element = $("#content");

		$element.html(pageurl);
		// $.ajax({
		// 	url : pageurl,
		// 	beforeSend : function() {
		// 		$element.html("Loading ....");
		// 	},
		// 	success : function(msg) {
		// 		$element.html(msg);
		// 	}
		// })
		if (pageurl!=window.location) {
			window.history.pushState({path : '#' + pageurl}, '', '#' + pageurl);
		}
		e.preventDefault();
	})
})