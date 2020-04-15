document.addEventListener('DOMContentLoaded', () => {
    const forms = document.getElementsByTagName('form');
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            sendmail();
            this.reset(); 
        });
    };
});


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

