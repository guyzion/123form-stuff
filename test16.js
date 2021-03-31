(function(){

	window.addEventListener('load', function(){
		console.log("hi im guy zion");

		var sourceControlId = 96197229, /** THE ID OF THE SENDER CONTROL */
		    
		myControl = loader.getEngine().getDocument().getElementById(sourceControlId);

		myControl.on('value-change', function(){

			console.log(myControl.getValue());

		});
		
		actionBar = loader.getEngine().getDocument().getElementByTypeId(29);

		actionBar.on('click', function(){

			console.log("clickkkosh");

		});
		
	});
})();
