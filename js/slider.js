var slideIndex = 1;
var click = false;
showDivs(slideIndex);

function minessDivs() {

	showDivs(slideIndex -= 1);
}

function plusDivs() {

	showDivs(slideIndex += 1);
}

function clicked() {
	click = true;
}

function currentDiv(n) {
	click = true;
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("slideshow");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" w3-white", "");
	}
	x[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " w3-white";
	if (click == false) {
		setTimeout(plusDivs, 3000);
	}
	color();
}

function color() {
	$("#p").text(slideIndex);
	if (slideIndex == 2 || slideIndex == 3) {
		$(".text-4").each(function () {
			$(this).addClass("text-3");
			$(this).removeClass("text-4");
		});
		$(".border-bottom-black").each(function () {
			$(this).addClass("border-bottom-white");
			$(this).removeClass("border-bottom-black");
		});
		$(".placeholder-black").each(function () {
			$(this).addClass("placeholder-white");
			$(this).removeClass("placeholder-black");
		});
	}
	if (slideIndex == 1) {
		$(".text-3").each(function () {
			$(this).addClass("text-4");
			$(this).removeClass("text-3");
		});
		$(".border-bottom-white").each(function () {
			$(this).addClass("border-bottom-black");
			$(this).removeClass("border-bottom-white");
		});
		$(".placeholder-white").each(function () {
			$(this).addClass("placeholder-black");
			$(this).removeClass("placeholder-white");
		});
	}
}