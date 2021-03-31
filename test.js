(function(){

	window.addEventListener('load', function(){
		console.log("hi im guy zion");

		var sourceControlId = 96197229, /** THE ID OF THE SENDER CONTROL */

		sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),

		targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

		sourceControlInstance.on('value-change', function(){

			console.log(sourceControlInstance.getValue());

		});
	});
})();
