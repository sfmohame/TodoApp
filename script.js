console.log("CONNECTED!");




var trashList=document.querySelectorAll(".trash")

var lineList=document.querySelectorAll(".line")

//


//toggles linethrough list presented paged refreshed
function lineThrough(){

		$(".todo").on("click", function(){
			$(this).toggleClass("lineThrough");
	});
}
	
//shows and hides the input button
$("button").on("click", function(){
	$("input").toggle();
});

//organized the line colors between shaded and white
function lineColor(){
	$(".line").each(function(){
		$(this).removeClass("white");
		$(this).removeClass("shaded");
		if($(this).index()%2==0){
			$(this).addClass("white");
		}
		else{
			$(this).addClass("shaded");
		}
	});
};



//shows and hides trash sign
function trash(){
	$(".line").each(function(){

		//shows trash sign when mouse on it
		$(this).on("mouseover", function(){
			$(this).find(".trash").css("display","inline-block");


		});

		//removes trash sign when mouse leaves
		$(this).on("mouseout", function(){
			$(this).find(".trash").css("display","none");
		});
	});
}
//deleting lines and 

function removeLine(){
	$(".line").each(function(){

		$(this).find(".trash").on("click", function () {
			$(this).parent().fadeOut(100, function(){
				$(this).remove();
			});
			lineColor();
			
			trash();
		});	


	});
}
	



$("i").on("click", lineColor());
$(".todo").on("click", lineColor());

lineColor();
trash();
removeLine();
lineThrough();


$("input").on('keypress',function(e) {
	if(e.which == 13) {
		$('.todos').append("<div class=\"line\"><div class=\"trash\"><p><i class=\"far fa-trash-alt\"></i></p></div><div class=\"todo\"><p>"+$("input").val()+"</p></div></div>");
		$("input").val("");
		$(".todo").last().on
		("click", function(){
		$(this).toggleClass("lineThrough");
	});

	}

	lineColor();
	trash();
	removeLine();
	
	
});








