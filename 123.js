
function validate()
{
var frm=document.signup;
if(document.feedback.firstname.value=="")
{
window.alert("error.First name is empty");
return false;
}
else if(document.feedback.lastname.value=="")
{
window.alert("error.Last Name is empty");
return false;
}
else if(document.feedback.email.value=="")
{
window.alert("error.Email is empty");
return false;
}
else if(document.feedback.password.value=="")
{
window.alert("error.Password is empty");
return false;
}
else if(document.feedback.password1.value=="")
{
window.alert("error.Re-type the same password");
return false;
}
else if(document.feedback.address.value=="")
{
window.alert("error.Address is empty is empty");
return false;
}
else if(document.feedback.postal.value=="")
{
window.alert("error.Address is empty is empty");
return false;
}
else
{
return true;
}
}
