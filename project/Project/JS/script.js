
function nameFunc() {
    event.preventDefault();
    var x = document.getElementById('username').value;
    if (x == "") {
      document.getElementById('name-msg').innerHTML= ':Name must be filled out';
      return false;
    }
}

function ageFunc(){
    event.preventDefault();
    var x= document.getElementById('ages').value;

    if(x == ""){
        document.getElementById('age-msg').innerHTML= ':Age must be filled out';
        return false;
    }else if(isNaN(x)){
        document.getElementById('age-msg').innerHTML= ':Please enter only in numbers';
        return false;
    }
}

function passwordFunc(){
    event.preventDefault();
    var x= document.getElementById('password').value;

    if(x == ""){
        document.getElementById('password-msg').innerHTML= ':Password must be filled out';
        return false;
    }else if(x.length <= 6){
        document.getElementById('password-msg').innerHTML= ':Please enter more than 6 characters';
        return false;
    }
}
function checkpasswordFunc(){
    event.preventDefault();
    var x= document.getElementById('check-password').value;
    var y= document.getElementById('password').value;

    if(x == ""){
        document.getElementById('checkpassword-msg').innerHTML= ':Password must be re-written';
        return false;
    }else if(x != y){
        document.getElementById('checkpassword-msg').innerHTML= ':Password doesn\'t match';
        return false;
    }
}