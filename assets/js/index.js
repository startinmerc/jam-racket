var $menuLis = Array.from(document.querySelectorAll(".menuItem")),
	$menu = document.querySelector('nav'),
	$greenText = document.querySelector("#green .text"),
	$redText = document.querySelector("#red .text"),
	$titleText = document.querySelector("#titleText"),
	$greenImage = document.querySelector("#greenPattern image");
	$redImage = document.querySelector("#redPattern image");

var	isTop = false,
	expanded = false;


var titleTextOptions = {
	strings: ["JAM_RACKET","JACKET_ARM","JAM_RACKET","TACKER_JAM","JAM_RACKET","EAT_MR_JACK","JAM_RACKET","CAT_AM_JERK","JAM_RACKET"],
	typeSpeed: 80,
	smartBackspace: false
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
	delay: anime.stagger(50, {start: 0}),
	easing: 'linear',
})
.add({
	targets: "nav",
	height: ["80px","410px"],
	duration: 200,
	easing: 'linear'
},0);


var menuToTop = anime({
	targets: "nav",
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
	duration: 200,
	easing: 'linear'
});


window.onload = function(){
	addMenuListeners();
}


function updateText(i) {
	$greenText.innerHTML = greenContent[i].words;
	$redText.style.marginTop = $greenText.clientHeight + "px";
	$redText.innerHTML = redContent[i].words;
};

function updateImages(i){
	$greenImage.setAttribute("xlink:href", greenContent[i].image);
	$redImage.setAttribute("xlink:href", redContent[i].image);
}

function addMenuListeners() {
	// Call add event listeners for menu items
	$menuLis.forEach((v,i) => addMenuItemListener(v,i));
	// Call add event listener for menu title
	addMenuTitleListener();
};

function addMenuItemListener(v,i){
	// Add click event listener to menu item
	v.addEventListener("click", function(){
		// Update related index in content.js
		updateText(i);
		// updateImages(i);
		// Minimise menu
		menuExpand.play();
		// expanded = false
		expanded = false;
		// If isTop is false, i.e if menu is centre screen
		if (!isTop) {
			// Play animation to move menu to top
			menuToTop.play();			
		};
		// Stop this listener from bubbling to menu bar
		event.stopPropagation();
	});
}

function addMenuTitleListener(){
	// Add to menu title
	$menu.addEventListener("click", function(){
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
		// if menu is centre screen
		if(!isTop){
			// reset typed animation
			titleTextTyped.reset(false);
			// replace with static HTML
			$titleText.innerHTML = "JAM_RACKET";
		};
	});
}