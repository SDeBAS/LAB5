function validate()
{
  validate_username();
  validate_password();
  validate_phnum();
  validate_email();
  validate_expyrs();
  validate_salary();
}

function validate_username()
{
  var usr=document.getElementById("username").value;
  var testcase = /^[a-zA-z]+$/;
  if(!testcase.test(usr))
  {
   window.alert("Invalid username. Try to put all characters");
  return false;
  }
  else
  {
    return true;
  }
}

function validate_phnum() {
  var usr = document.getElementById("phnum").value;
  var testcase = /^\d{10}$/;
  if (!testcase.test(usr)) {
    window.alert("Invalid Phone Number");
  }
}

function validate_password() {
  var usr = document.getElementById("password").value;
  const userpattern2 = /[a-z]+/;
  const userpattern3 = /[A-Z]+/;
  const userpattern4 = /\d+/;
  const userpattern5 = /[-._!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+/;
  
  if (!userpattern2.test(usr)) {
    window.alert("Password must have atleast 1 lowercase character");
    return false;
  }
  else if (!userpattern3.test(usr)) {
    window.alert("Password must have atleast 1 uppercase character");
    return false;
  }
  else if (!userpattern4.test(usr)) {
    window.alert("Password must have atleast 1 digit");
    return false;
  }
  else if (usr.match(userpattern5) == null) {
    window.alert("Password Must contain special characters");
    return false;
  }
}

function validate_email()
{
  var usr = document.getElementById("email").value;
  const userpattern = /^\w+([\.-_]?\w)*@\w+([\.])([in]|[com])+$/;
  if (!userpattern.test(usr)) {
    window.alert("Enter valid email");
    return false;
  }
}

function validate_expyrs()
{
  var usr = document.getElementById("expyrs").value;
  if (usr < 1 || usr > 80)
  {
    window.alert("Enter valid years of experience");
  }
}

function validate_salary()
{
  var usr = document.getElementById("sal").value;
  if (usr < 0) {
    window.alert("Enter valid salary");
  }
}
