
var url = "https://api.nytimes.com/svc/topstories/v1/politics.json";
url += '?' + $.param({
  'api-key': "#"
  });
$.getJSON(url,function gotData(object){               //FUNCTION TO CREATE API’S
		var headln=object.results
		//for (var i=0;i<headln.length;i++)
	//console.log(headln[0].abstract);/*
	$("#news1").html("<h4>"+headln[0].abstract+"</h4>")
			
		 //RANDOM NEWS COROUSEL
		 $("#news2").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].abstract+"</h4>")
		  $("#news3").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].abstract+"</h4>")
		
		$("#news4").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].abstract+"</h4>")
		
		$("#news5").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].abstract+"</h4>")
		
		$("#news6").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].abstract+"</h4>")
		
		$("#news7").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].abstract+"</h4>")
		
	})
