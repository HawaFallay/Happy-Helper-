//fetch request from the landing page
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const saveRegistrationDetails = (note) =>{
    fetch('/registerpage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
}