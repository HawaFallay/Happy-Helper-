//fetch request from the landing page
//const name = document.getElementById("name").value;
// const email = document.getElementById("email").value;
// const password = document.getElementById("password").value;

const saveRegistrationDetails = (note) =>{
    fetch('/registerpage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });
}
// TaskHandler is aimed to take form input and post it onto the dashboard
const newTaskHandler = async function(event) {
  event.preventDefault();

  const taskTitle = document.querySelector('#taskTitle').value;
  const taskdeets = document.querySelector('#taskDeets').value;
  const location = document.querySelector('#location').value;
  const taskTime = document.querySelector('#task_time').value;
  //const taskTime = document.querySelector('input[type="date"]').value;


// get method to retrieve from database and display it in the client page
//james goslin
  console.log(taskTime, taskTitle, taskdeets);

  await fetch (`/api/task`, {
    method:'POST',
    body: JSON.stringify({
      taskTitle,
      taskdeets,
      location,
      taskTime,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  document.location.replace('/clientpage');
  console.log(taskTime, taskTitle, taskdeets);
};

document
  .querySelector('#newTaskForm')
  .addEventListener('submit', newTaskHandler);

  // Date picker for form
  //is the dollar sign necessary
