const $menuTitle = $("#menuTitle"),
	$menuLis = Array.from($(".menuItem")),
	$menu = $('.menu:first');

$menuTitle.click(function(){
	$menu.toggleClass("menuActive");
});

var lisA = anime({
  targets: $menuLis,
  translateX: ["-200%","0%"],
  delay: anime.stagger(200, {start: 300}),
  autoplay: false
});

document.querySelector("#menuTitle").onclick = lisA.play;

for (var i=0; i < $menuLis.length; i++) {
	$menuLis[i].addEventListener("click", function(){
		$menu.removeClass("menuActive");
		$menu.addClass("menuTop");
		showText("#green p", content[0], 0, 500);
	});
}

// for (var i=0; i < $menuLis.length; i++) {
// 	$menuLis[i].addEventListener("click", menuClick);
// }

// function menuClick() {
// 	$menu.removeClass("menuActive");
// 	$menu.addClass("menuTop");
// 	showText("#green p", content[i], 0, 5);
// }

function showText(target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

var content = [
	"JAM_RACKET",
	"RACKET_JAM"
	];

// $(function () {
//   showText("#green p", content[0], 0, 5);   
// });