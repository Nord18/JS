$("button").click(function() {
	$("body").css("background-color", "rgba(0, 0, 0, 0.8")
	$("div").css({
    "opacity":"0",
}).show().animate({opacity:1})
})

$(".close").click(function() {
	$("body").css("background-color", "#fff")
	$("div").css({
    "opacity":"0",
}).hide().animate({opacity:1})
})