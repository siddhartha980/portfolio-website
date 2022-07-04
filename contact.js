 function checked() {
 	var fname= document.forms["Form"]["Fname"].value;
 	var lname= document.forms["Form"]["Lname"].value;
 	var mnumber= document.forms["Form"]["Mobile Number"].value;
 	var email= document.forms["Form"]["email Number"].value;
 	var password= document.forms["Form"]["Password"].value;
 	var repassword= document.forms["Form"]["Conform Password"].value;
 	var submit= document.forms["Form"]["submit"].value;

 	if (fname=="") {
 		alert("Enter your First Name");
 	}
 	if (lname=="") {
 		alert("Enter your Last Name");
 	}
 	if (mnumber=="") {
 		alert("Enter your Mobile Number");
 	}
 	if (mnumber.length>10 || mnumber.length<10) {
 		alert("The phone number must be 10 digit.")
 	}
 	if (email=="") {
 		alert("Enter your Email");
 	}
 	if (password=="" || repassword=="") {
 		alert("Enter your Password");
 	}
 	if (submit==submit) {
 		alert("Thanks for submit");
 	}

 }