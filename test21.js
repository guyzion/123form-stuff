(function(){

	window.addEventListener('load', function(){
		console.log("hi im guy zion");
		
		try {
			var sumControlId = 96197229, /** THE ID OF THE SENDER CONTROL */
			sumControl = loader.getEngine().getDocument().getElementById(sumControlId);

			sumControl.on('value-change', function(){
				var sum = sumControl.getValue().value
				localStorage.setItem("sum", sum);
				console.log(sum);

			});
		}
		catch(e){
			console.log(localStorage.getItem("sum"));
		}
		
	});
})();
