var name1=document.getElementById("uname");
var log =document.getElementById("name");
var password=document.getElementById("password");
var pass=document.getElementById("pass");
log.innerHTML="";
function valName(){
    if(name1.value=="admin"){
        log.innerHTML="";
        return true;
    }
    else if(name1.value==""){
        log.innerHTML="";   
    }
    else{
        log.innerHTML="Invalid username";
        log.style.color="red";
        return false;
        
    }
    
}
function valpswd(){
    if(password.value=="12345"){
        pass.innerHTML="";
        pass.style.color="red";
        return true;
    }
    else{
        pass.innerHTML="Invalid password";
    }
}
var submit= document.getElementById("button");
function validate(f1,f2){
    if(f1()&&f2()){
        return true;
    }
    else{
        alert("enter valid details");
        return false;
    }
}  