canvas = [];
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
		canvas[i]  = new fabric.Canvas('myCanvas'+i);
	   }
	});
	
	// Adding Shapes
	$(".insertShape").click(function(){
		var selectedCanvas = $("#canvasList option:selected").val();
		var selectedShape = parseInt($("#shapeList option:selected").val());
		switch (selectedShape){
			case 1: 
				drawCircle(selectedCanvas);
				break;
			case 2: 
				drawSqr(selectedCanvas);
				break;
			case 3:
				drawRect(selectedCanvas);
				break;
		}
		canvasPlacement();
	});
});


// Defining Shapes
function drawCircle(canvasId){
	var canvas1 = canvas[canvasId];
	var object1 = new fabric.Circle({
		radius: 30,
		fill: 'black',
		left: 70,
		top: 10
	});
	canvas1.add(object1);
	
}

function drawRect(canvasId){
	var canvas1 = canvas[canvasId]; 
	var object2 = new fabric.Rect({
		width: 80,
		height: 50,
		fill: 'black',
		opacity: 1,
		left: 10,
		top: 10
	});
	canvas1.add(object2);
}

function drawSqr(canvasId){
	var canvas1 = canvas[canvasId]; 
	var object2 = new fabric.Rect({
		width: 50,
		height: 50,
		fill: 'black',
		opacity: 1,
		left: 10,
		top: 10
	});
	canvas1.add(object2);
}