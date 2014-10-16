<?php
/*
 Template Name: I WIN
 */
 ?>



<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Watch Time Calculator</title>
<script src="watchEpCal.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="theme.css">

</head>

<body>
<div id="wrapper">
<div id="clockDisplay" >00:00:00 AM</div>
<h1 id="title">Watch Time Calculator</h1>
<form action="demo_form.asp" novalidate class="kingForm">
length  of  each Ep:<input type="number" id="numInput" value="20"/> Mins
<br>
  Number of Episodes : <input type="text" name="userInput" id="userInput" >
  
  <input type="button" value="GET-Time" onclick="animeCal()" />
</form>
<div id="content">
<h3 id="output"></h3>
<h3 id="output2"></h3>
<h3 id="output3"></h3>
<h3 id="output4"></h3>
</div>
</div>
<script type="text/javascript" language="javascript">

	function renderTime(){
		var currentTime = new Date();
		var diem= "AM";
		var hours = currentTime.getHours();
       var  minutes = currentTime.getMinutes();
	   var  seconds = currentTime.getSeconds();
		
		if(hours==0){
			hours= 12;
	}else if(hours > 12){
		hours = hours- 12;
		diem = "PM";
	}
	
	if(hours <10){
		hours="0" + hours
		
	}
	
	if(minutes <10){
		minutes="0" + minutes
		
	}
	
	if(seconds <10){
		seconds="0" + seconds
		
	}

    var  myClock = document.getElementById("clockDisplay");
	
	 
 myClock.textContent =hours + ":" + minutes + ":" +  seconds + " " + diem;
 myClock.innerText = hours + ":" + minutes + ":" +  seconds + " " + diem;
		
	setTimeout('renderTime()',1000);
			
	}
	
	
renderTime();


</script>
</body>
</html>
