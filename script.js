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
