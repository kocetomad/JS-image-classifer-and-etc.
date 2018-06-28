const Clarifai = require('clarifai');
window.nice="";
window.LogData =function(){
const app = new Clarifai.App({
 apiKey: 'c2f55429b62b422f90b7fc535104a6a0'
 
});





app.models.train("arduino").then(
  function(response) {
    // do something with response
  },
  function(err) {
    // there was an error
  }
);

app.models.predict("arduino", [window.txt]).then(
  function(response) {
		console.log(response.outputs[0].data.concepts[0].name);
		console.log(response);
		window.nice=response.outputs[0].data.concepts[0].name;
		if(response.outputs[0].data.concepts[0].value>0.2){
			if (response.outputs[0].data.concepts[0].name=="nano" || response.outputs[0].data.concepts[0].name=="uno"){
			document.getElementById("ok").innerHTML = "Arduino " + window.nice + " which can be found in our store but is currently out of stock";
			
	document.getElementById("para").innerHTML.fontcolor = "green";
	document.getElementById("ok").innerHTML.fontcolor = "green";
	document.getElementById("para").innerHTML.fontsize = "6";
	document.getElementById("ok").innerHTML.fontsize = "8";
			}else{
			document.getElementById("ok").innerHTML = window.nice + " which can be found in our store but is currently out of stock";
			}
		}else{

			app.models.predict(Clarifai.GENERAL_MODEL, window.txt).then(
			function(response) {
						window.nice=response.outputs[0].data.concepts[0].name;
						document.getElementById("ok").innerHTML = "We do not sell " +window.nice ;

			},
			function(err) {
    // there was an error
				}
			);		
		}

  },
  function(err) {
    // there was an error
  }
);

			app.models.predict(Clarifai.GENERAL_MODEL, window.txt).then(
			function(response) {
								console.log(response);

			},
			function(err) {
    // there was an error
				}
			);

};