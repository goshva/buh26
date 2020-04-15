function sendmail(){
var data = new FormData();
data.append("name", document.getElementById('name').value);
data.append("email", document.getElementById('email').value);
data.append("phone", document.getElementById('phone').value);
data.append("message", document.getElementById('message').value);

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

