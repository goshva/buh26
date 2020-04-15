function sendmail(){
var data = new FormData();
data.append("name", document.getElementById('name'));
data.append("email", document.getElementById('email'));
data.append("phone", document.getElementById('phone'));
data.append("message", document.getElementById('message'));

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "/mail/MailHandler.php");
xhr.send(data);
}

