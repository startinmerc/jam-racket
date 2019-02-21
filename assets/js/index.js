var $menuTitle = $("#menuTitle"),
	$menuLis = Array.from($(".menuItem")),
	$menu = $('.menu:first');

var	isTop = false,
	expanded = false;



var titleTextOptions = {
	strings: ["JAM_RACKET","JACKET_ARM","JAM_RACKET","TACKER_JAM","JAM_RACKET","EAT_MR_JACK","JAM_RACKET","CAT_AM_JERK","JAM_RACKET"],
	typeSpeed: 80
};

var titleTextTyped = new Typed("#titleText", titleTextOptions);

var menuExpand = anime.timeline({
	autoplay: false,
	complete: function(){
		menuExpand.reverse();
	}
});

menuExpand.add({
	targets: '.menuItem',
	translateX: ["-200%","0%"],
	delay: anime.stagger(50, {start: 50}),
	easing: 'easeOutElastic',
})
.add({
	targets: '.menu',
	height: ["77px","410px"],
	duration: 200,
},0);


var menuToTop = anime({
	targets: '.menu',
	top: ['50%','0%'],
	left: ['50%','0'],
	translateY: ['-50%','0%'],
	translateX: ['-50%','0%'],
	boxShadow: [{value: ['10px 10px 0 0 currentColor','0px 10px 0 0 currentColor']}],
	width: ['70vw','90vw'],
	autoplay: false,
	complete: function(){
		isTop = true;
	},
	duration: 200
});


$(document).ready(function(){
	addMenuListeners();
})


function updateText(i) {
	$("#green .text").html(greenContent[i]);
	$("#red .text").css("margin-top", $("#green .text").height() + 150);
	$("#red .text").html(redContent[i]);
};

function addMenuListeners() {
	// Call add event listeners for menu items
	$menuLis.forEach((v,i) => addMenuItemListener(v,i));
	// Call add event listener for menu title
	addMenuTitleListener();
};

function addMenuItemListener(v,i){
	// Add click event listener to menu item
	v.addEventListener("click", function(){
		console.log(expanded);
		// Call updateText for related index in content.js
		updateText(i);
		// Minimise menu
		menuExpand.play();
		// expanded = false
		expanded = false;
		// If isTop is false, i.e if menu is centre screen
		if (!isTop) {
			// Play animation to move menu to top
			menuToTop.play();			
		};
		event.stopPropagation();
	});
}

function addMenuTitleListener(){
	// Add to menu title
	document.querySelector(".menu").addEventListener("click", function(){
		console.log(expanded);
		// if menu is expanded
		if (expanded) {
			// play menu expansion timeline in reverse
			menuExpand.play();
			// update expanded
			expanded = false;
		// otherwise
		} else {
			// play menu expansion
			menuExpand.play();
			// update expanded
			expanded = true;
		};
	});
}














