(function(){

	window.addEventListener('load', function(){
		console.log("hi im guy zion");

		var sourceControlId = 96197229, /** THE ID OF THE SENDER CONTROL */

		var myControl = loader.getEngine().getDocument().getElementById(sourceControlId);

		myControl.on('value-change', function(){

			console.log(myControl.getValue());

		});
		
	});
})();
