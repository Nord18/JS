$(".card__item").hover(function() {
	$(this).css("border-bottom", "2px solid white")
	$(".tool").css("fill", "#fff")
	$(".card__link").css("color", "#fff")
}, function() {
	$(this).css("border-bottom", "none")
	$(".tool").css("fill", "")
	$(".card__link").css("color", "")
});

$(".card__item--2").hover(function() {
	$(this).css("border-bottom", "2px solid white")
	$(".pic").css("fill", "#fff")
	$(".card__link--2").css("color", "#fff")
}, function() {
	$(this).css("border-bottom", "none")
	$(".pic").css("fill", "")
	$(".card__link--2").css("color", "")
});

$(".card__item--3").hover(function() {
	$(this).css("border-bottom", "2px solid white")
	$(".basket").css("fill", "#fff")
	$(".card__link--3").css("color", "#fff")
}, function() {
	$(this).css("border-bottom", "none")
	$(".basket").css("fill", "")
	$(".card__link--3").css("color", "")
});