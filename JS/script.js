function validation() {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var age= document.getElementById('ages').value;
    var passwd= document.getElementById('password').value;
    var checkPasswd= document.getElementById('check-password').value;


    if (username == "") {
      document.getElementById('name-msg').innerHTML= 'Name must be filled out';
      return false;
    } else {
        document.getElementById('name-msg').style.visibility = 'hidden';
    }

    if(age == ""){
        document.getElementById('age-msg').innerHTML= ':Age must be filled out';
        return false;
    } else if(isNaN(age)) {
        document.getElementById('age-msg').innerHTML= ':Please enter only in numbers';
        return false;
    } else {
        document.getElementById('age-msg').style.visibility = 'hidden';
    }

    if(passwd == ""){
        document.getElementById('password-msg').innerHTML= ':Password must be filled out';
        return false;
    } else if(passwd.length <= 6) {
        document.getElementById('password-msg').innerHTML= ':Please enter more than 6 characters';
        return false;
    } else {
        document.getElementById('password-msg').style.visibility = 'hidden';
    }

    if(checkPasswd == "") {
        document.getElementById('checkpassword-msg').innerHTML= ':Password must be re-written';
        return false;
    } else if(passwd != checkPasswd) {
        document.getElementById('checkpassword-msg').innerHTML= ':Password doesn\'t match';
        return false;
    } else {
        document.getElementById('checkpassword-msg').style.visibility = 'hidden';
    }
}