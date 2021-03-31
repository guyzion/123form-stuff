(function(){
	
	var sum = "init sum";

	window.addEventListener('load', function(){
		console.log("hi im guy zion");
		
		if(loader) {
			var sourceControlId = 96197229, /** THE ID OF THE SENDER CONTROL */
			myControl = loader.getEngine().getDocument().getElementById(sourceControlId);

			myControl.on('value-change', function(){
				sum = myControl.getValue().value;
				console.log(myControl.getValue().value);

			});
		}
		else {
			console.log("sum");
		}
		
	});
})();
