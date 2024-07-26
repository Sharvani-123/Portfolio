document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector('form');
  const fullName = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const mess = document.getElementById("message");

  function sendEmail(){
    const bodyMessage = `
      Full Name: ${fullName.value}<br>
      Email: ${email.value}<br>
      Message: ${mess.value}
    `;
    console.log('Sending email with body:', bodyMessage);

    Email.send({
      SecureToken : "81306e22-5ec0-4d5e-9738-60e620187194",
      To : 'sharvani11620@gmail.com',
      From : "sharvani11620@gmail.com",
      Subject : subject.value,
      Body : bodyMessage
    }).then(
      message => {
        console.log('Email sent: ', message);
        if(message == "OK"){
          Swal.fire({
            title: "Success",
            text: "Message sent successfully!",
            icon: "success"
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Message failed to send.",
            icon: "error"
          });
        }
      }
    ).catch(error => {
      console.log('Error sending email: ', error);
      Swal.fire({
        title: "Error",
        text: "Message failed to send.",
        icon: "error"
      });
    });
  }

  function checkInputs(){
    const items = document.querySelectorAll(".form-control");

    for(const item of items){
      if(item.value == ""){
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
      item.addEventListener("keyup", () => {
        if(item.value != ""){
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        } else {
          item.classList.add("error");
          item.parentElement.classList.add("error");
        }
      });
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('Form submitted');
    checkInputs();
    sendEmail();
    form.reset();
    return false;
  });
});
