(function(){

	window.addEventListener('load', function(){
		console.log("hi im guy zion");

		var sourceControlId = 96197229, /** THE ID OF THE SENDER CONTROL */

		sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId);

		sourceControlInstance.on('value-change', function(){

			console.log(sourceControlInstance.getValue());

		});
		
		var submitButtonInstance = loader.getEngine().getDocument().querySelectorAll('button[type=text]')
		submitButtonInstance.on("click", function(){
			console.log("clickity click");
		});
	});
})();
