// JavaScript Document
var currentTime = new Date();
        var hours;
        var minutes;
		var seconds;
		var day;
		var h;
		var m;
		var s;
		var time ; 
		var wp;
		var wp2;
		var wp3;
		//var myClock;
		
		
var month=new Array();
month[0]="January";
month[1]="February";
month[2]="March";
month[3]="April";
month[4]="May";
month[5]="June";
month[6]="July";
month[7]="August";
month[8]="September";
month[9]="October";
month[10]="November";
month[11]="December";

window.onload = renderTime;


	
	function animeCal(){
		var input = document.getElementById('userInput').value
		var numinput = document.getElementById('numInput').value
		hours = currentTime.getHours();
        minutes = currentTime.getMinutes();
	    seconds = currentTime.getSeconds();
		wp =document.getElementById("output");
	    wp2 =document.getElementById("output2");
		wp3 =document.getElementById("output3");
		var diem= "AM";
	
		//var time = "100"
		time = input*numinput ; 

		if(time < 1){
			
			wp.innerHTML=""; 
			wp2.innerHTML=""; 
		  wp.appendChild(document.createTextNode( "It will take : " + time+ " min"));
		}else{
			
			wp.innerHTML=""; 
			wp2.innerHTML=""; 
			wp3.innerHTML=""; 
			var theHours2 = Math.floor(time/60);
           var theMinutes2 = time%60;
	        var theHours = Math.floor(time/60);
           var theMinutes = time%60;
		  
		
		   if(theHours2 <10){
		theHours2="0" + theHours2
		
	}
	
	if(theMinutes2 <10){
		theMinutes2="0" + theMinutes2
		
	}
	  
           var theTime = theHours2 + ":" + theMinutes2;
         //var d = new Date();
		 // d.setMinutes(d.getMinutes() + 30);
		 var today = new Date();
        var tomorrow = new Date();
		
		
		var numberToAdd = 1;
     today.setDate(today.getDate() + numberToAdd); 

     tomorrow.setHours(today.getHours() + theHours);
	tomorrow.setMinutes(today.getMinutes()+ theMinutes );
		
	h = tomorrow.getHours();
     m = tomorrow.getMinutes();
      s   = tomorrow.getSeconds();
	  day = tomorrow.getDay();
	  var date2 = tomorrow.getDate();
	  var year = tomorrow.getFullYear();
	  
	  var themonth = month[tomorrow.getMonth()];

		 
		
		if(h==0){
			h= 12;
	}else if(h > 12){
		h = h- 12;
		diem = "PM";
	}
	
	if(h <10){
		h="0" + h
		
	}
	
	if(m <10){
		m="0" + m
		
	}
	
	if(s <10){
		s="0" + s
		
	}
	
	
	
	
    var  myClock2 = document.getElementById("output3");
	var  date = document.getElementById("output4");
	
	 
myClock2.textContent =  "You should be done at ~  " + h + ":" + m + ":" +  s + " " + diem;
 myClock2.innerText =  "You should be done at ~ " + h + ":" + m + ":" +  s + " " + diem;
		 myClock2.innerText =  "You  be done at ~ " + h +  ":" + m + ":" +  s + " " + diem;
		  date.innerText =  "You should be done on the ~ " +date2 +"  of  "  + themonth + "  " + year;

		
		
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
		 
  /*    var fumins=   currentTime.setMinutes(currentTime.getMinutes() +10);
	   var fuminsran = Math.floor(fumins)*/
		wp.appendChild(document.createTextNode( "It will take you  ~ " + time+ " mins"));
		wp2.appendChild(document.createTextNode( "It will take you  ~  " + theTime +  " hours"  ));
		//wp3.appendChild(document.createTextNode( "Future time:  " + tomorrow ));
			
		}
		
		
		
		
		
	}
	
	