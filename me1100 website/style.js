var submitMessage;
var errorsInOrder; //Boolean variable - tracks if errors are in the order
var errorMessage; //String variable - tallies the errors in the order

function initialize(){
	"use strict";
	
	submitMessage = document.getElementById("submit");
	submitMessage.addEventListener("click", validation);
}

function validation(){
	"use strict";
	
	errorsInOrder = false;
	errorMessage = "";
	document.getElementById("messageFeedback").innerHTML = "";
	
	customerFNameValidation();
	
	customerLNameValidation();
	
	subjectValidation();
	
	countryValidation();
	
	if(errorsInOrder){
		document.getElementById("messageFeedback").innerHTML = errorMessage;
	}else{
		document.getElementById("messageFeedback").innerHTML = "Your message has been sent!";
		submitMessage.removeEventListener("click", validation);
	}
}

function customerFNameValidation(){
	"use strict";
	
	if(document.getElementById("fname").value===""){
		errorMessage = errorMessage + "First Name required.<br>";
		errorsInOrder = true;
	}
}

function customerLNameValidation(){
	"use strict";
	
	if(document.getElementById("lname").value===""){
		errorMessage = errorMessage + "Last Name required.<br>";
		errorsInOrder = true;
	}
}

function countryValidation(){
	"use strict";
	
	var optionNumber = document.getElementById("country").options.selectedIndex;
	
	if(optionNumber===0){
		errorMessage = errorMessage + "Country required.<br>";
		errorsInOrder = true;
	}
}

function subjectValidation(){
	"use strict";
	
	if(document.getElementById("subject").value===""){
		errorMessage = errorMessage + "Subject required.<br>";
		errorsInOrder = true;
	}
}

addEventListener("load", initialize);