const $menuTitle = $("#menuTitle"),
	$menuLis = Array.from($(".menuItem")),
	$menu = $('.menu:first'),
	content = [
	"<h1>HEADER_1</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
	"<h1>HEADER_2</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
	];

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

for (var i=0; i < $menuLis.length; i++) {
	$menuLis[i].addEventListener("click", function(){
		menuClick();
		updateGreen(0);
		updateRed(1);
	});
}

function menuClick() {
	$menu.removeClass("menuActive");
	$menu.addClass("menuTop");
}

function updateGreen(i) {
	$("#green .text").html(content[i]);
}

function updateRed(i) {
	$("#red .text").css("margin-top", $("#green .text").height() + 150);
	$("#red .text").html(content[i]);
}

