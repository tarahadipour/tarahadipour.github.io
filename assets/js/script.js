$(document).ready(function() {


	const distanceToNextImage = -1000;
	let currentImageNumber = 0;
	// $(".carousel-section").click(function() {
	// 	let index = $(this).attr("id");
	// 	let parsed = parseInt(index)*distanceToNextImage + "px";
	// 	$("#carousel-strip").css("left", parsed)
	// });



	$("#right").click(function() {
		console.log("right")
		currentImageNumber = currentImageNumber + 1;
		$("#carousel-strip").css("left", currentImageNumber*distanceToNextImage);
	});
		console.log("right")
	$("#left").click(function() {
		currentImageNumber = currentImageNumber - 1;
		$("#carousel-strip").css("left", currentImageNumber*distanceToNextImage);
	});

	$(".downarrows").click(function(){
		console.log("down")
		$(window).scrollTo($(".postcontent"))
	});

	$(".backtotop").click(function(){
		console.log("down")
		$(window).scrollTo($("html"))
	});

	$.extend($.scrollTo.defaults, {
  axis: 'y',
  duration: 400
});
})
