// Tested on HP iLO 5 ver 1.40

javascript: pswd={
"172.16.0.1":"YOUR_PASSWORD_HERE",
"172.16.0.2":"YOUR_PASSWORD_HERE"};
document.getElementById("appFrame").contentWindow.document.getElementById("username").value="Administrator";
document.getElementById("appFrame").contentWindow.document.getElementById("password").value=pswd[document.URL.slice(document.URL.indexOf("//")+2,-1)];
document.getElementById("appFrame").contentWindow.document.getElementById("login-form__submit").click();
