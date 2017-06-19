//Populating JSON Data
$.getJSON('https://jsonplaceholder.typicode.com/albums', function (data) {
	var item = [];
	$.each(data, function(key, value){
		var identifierId = parseInt(value.id);
		var filterID = identifierId % 2;
		if(filterID === 0 && identifierId < 11){
			$("<option value='"+identifierId+"'>"+identifierId+"</option>").appendTo("#counter");
		}
	});
});

//Canvas and Shape Generation
$(document).ready(function(){
	$(".generateCanvas").on('click',function(){   
	   $(".canvasContainer").html('');
	   $("#canvasList option").remove();
	   $("<option value='0'>Select a Canvas to Draw</option>").appendTo("#canvasList");
	   var canvasCounter = $("#counter").val();
	   for(var i = 0; i < canvasCounter; i++){
		$("<canvas id='myCanvas"+i+"' width='200' height='200'></canvas>").appendTo(".canvasContainer");
		$("<option value="+i+">Canvas "+i+"</option>").appendTo("#canvasList");
	   }
	});
});