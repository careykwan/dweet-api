var ClientID;
var RedirectURI;
var accessToken; 

$.ajax({
		url: "../config.json",
		dataType: 'json',
		success: function(instagramData){
			console.log(instagramData);
			
			
		},
		error:function(error){
			console.log(error);
			console.log("something went wrong");
		}

	})
	