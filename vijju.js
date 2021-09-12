var format=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validateform(){
    var email=document.myform.email.value;
    var pass=document.myform.password.value;
    if(email==null || email==""){
        alert("please enter the email");
        return false;
    }
    else if(pass==null || pass==""){
        alert("please enter the password");
        return false;
    }
    else if(!(format.test(email))){
        alert("please enter a valid email");
        return false;
    }
    else{
        alert("you have sucessfully logged in");
    }
}