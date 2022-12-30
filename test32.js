(function(){
	console.log("hiiiiiiiiiiiiiiiiii");
	window.addEventListener('load', function(){
		console.log("hi im guy zion");
		
		try {
			var sumControlId = 96233099, 
			sumControl = loader.getEngine().getDocument().getElementById(sumControlId);
			var finalEmailControlId = 96233355,
			finalEmailControl = loader.getEngine().getDocument().getElementById(finalEmailControlId);

			finalEmailControl.on('value-change', function(){
				var sum = sumControl.getValue().value
				localStorage.setItem("sum", sum);
				console.log(sum);

			});
		}
		catch(e){
			setTimeout(function(){ 
				window.location.href = "https://secure.cardcom.solutions/e/bJg/?sum=" + localStorage.getItem("sum");
			}, 1000);
		}
		
	});
})();
