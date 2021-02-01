$(document).ready(function(){
	
// Menu Bar Functions Start //


$(".nav-head").mouseover(function(){
	$(this).css("color","grey");
})

$(".nav-head").mouseout(function(){
	$(this).css("color","white");
})

$(".home-head").mouseover(function(){
	$(".home-border").addClass("border-active");
	$(".home-border").removeClass("border-inactive");

});

$(".home-head").mouseout(function(){
	$(".home-border").addClass("border-inactive");
	$(".home-border").removeClass("border-active");
});


$(".home-button").mouseover(function(){
	$(".home-button").addClass("button-active");
});

$(".home-button").mouseout(function(){
	$(".home-button").removeClass("button-active");
});


});
