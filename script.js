let username=document.getElementById("username");
let password=document.getElementById("password");
let userError=document.getElementById("userError");
let passError=document.getElementById("passError");
let flag=1,flag1=1;
function validateForm()
{
	if(username.value=="")
	{
		userError.innerHTML="User name is empty";
		flag=0;
	}
	else if(username.value.length<3)
	{
		userError.innerHTML="Min 3 characters required";
		flag=0;
	}
	else
	{
		userError.innerHTML="";
		flag=1;
	}
	if(password.value=="")
	{
		passError.innerHTML="Please provide your password";
		flag1=0;
	}
	else{
		passError.innerHTML="";
		flag1=1;
	}
	if(flag && flag1)
	{
		return true;
	}
	else{
		return false;
	}
}