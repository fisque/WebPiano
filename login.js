function validate(){
	/*Username: Jenny, Password: VirtualPiano*/
	var username = document.getElementById("username").value;
	var pwd = document.getElementById("pswrd").value;
	console.log(pwd);	
	if(username == "Jenny" && pwd == "VirtualPiano"){
		window.location = "profile.html";
		return false;
	} 
	//alert("Your username or password was not correct");
	document.getElementById("pwd-msg").innerHTML += "Your username or password was not correct";
}

function showPwd(){
	var pwd = document.getElementById("pswrd");
	if(pwd.type === "password"){
		pwd.type = "text";
	}
	else{
		pwd.type = "password";
	}
}