function validateForm(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

if(name.length < 3){
alert("Enter valid name");
return false;
}

if(!email.includes("@")){
alert("Enter valid email");
return false;
}

alert("Registration Successful");
return true;
}