const $menuTitle = $("#menuTitle"),
	$menuLis = Array.from($(".menuItem")),
	$menu = $('.menu:first');

$menuTitle.click(function(){
	$menu.toggleClass("menuActive");
});

var listPop = anime({
  targets: $menuLis,
  translateX: ["-200%","0%"],
  delay: anime.stagger(200, {start: 300}),
  autoplay: false
});

document.querySelector("#menuTitle").onclick = listPop.play;

function menuClick() {
	$menu.removeClass("menuActive");
	$menu.addClass("menuTop");
}

function updateGreen(i) {
	$("#green .text").html(greenContent[i]);
}

function updateRed(i) {
	$("#red .text").css("margin-top", $("#green .text").height() + 150);
	$("#red .text").html(redContent[i]);
}

// To refactor:

$menuLis[0].addEventListener("click", function(){
	menuClick();
	updateGreen(0);
	updateRed(0);
});

$menuLis[1].addEventListener("click", function(){
	menuClick();
	updateGreen(1);
	updateRed(1);
});

$menuLis[2].addEventListener("click", function(){
	menuClick();
	updateGreen(2);
	updateRed(2);
});

$menuLis[3].addEventListener("click", function(){
	menuClick();
	updateGreen(3);
	updateRed(3);
});

// for (var i=0; i < $menuLis.length; i++) {
// 	$menuLis[i].addEventListener("click", function(){
// 		menuClick();
// 		updateGreen(0);
// 		updateRed(0);
// 	});
// }