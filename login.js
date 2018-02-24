function validate(){
	/*Username: Jenny, Password: VirtualPiano*/
	var username = document.getElementById("username").value;
	var pwd = document.getElementById("pswrd").value;
	console.log(pwd);	
	if(username == "Jenny" && pwd == "VirtualPiano"){
		window.location = "profile.html";
		return false;
	} 
	document.getElementById("pwd-msg").innerHTML = "Your username or password was not correct";
}