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

var titleTextOptions = {
  strings: ["JAM_RACKET","JACKET_ARM","JAM_RACKET","TACKER_JAM","JAM_RACKET","EAT_MR_JACK","JAM_RACKET","CAT_AM_JERK","JAM_RACKET"],
  typeSpeed: 80
}

var titleTextTyped = new Typed("#titleText", titleTextOptions);

document.querySelector("#menuTitle").onclick = listPop.play;


function menuToTop() {
	$menu.removeClass("menuActive");
	$menu.addClass("menuTop");
}

function updateText(i) {
	$("#green .text").html(greenContent[i]);
	$("#red .text").css("margin-top", $("#green .text").height() + 150);
	$("#red .text").html(redContent[i]);
}

// To refactor:

// $menuLis.forEach(function(v,i,a){
// 	v.click(function(){console.log("£");})
// })

$menuLis[0].addEventListener("click", function(){
	menuToTop();
	updateText(0);
});

$menuLis[1].addEventListener("click", function(){
	menuToTop();
	updateText(1);
});

$menuLis[2].addEventListener("click", function(){
	menuToTop();
	updateText(2);
});

$menuLis[3].addEventListener("click", function(){
	menuToTop();
	updateText(3);
});


