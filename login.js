function validate(){
	/*Username: Jenny, Password: VirtualPiano*/
	/*Username: Jenny, Password: VirtualPiano*/
	var username = document.getElementById("username").value;
	var pwd = document.getElementById("pswrd").value;
	console.log(pwd);
	if(username == "Jenny" && pwd == "VirtualPiano"){
		window.location = "index.html";
		return false;
	}
	//alert("Your username or password was not correct");
	document.getElementById("pwd-msg").style.display = 'inline';
	document.getElementById("pwd-msg").append(document.createTextNode("Your username or password was not correct"));
	document.getElementById("username").focus();
	document.getElementById("username").value = "";
	document.getElementById("pswrd").value = "";
	return false;
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