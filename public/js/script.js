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
// TaskHandler is aimed to take form input and post it onto the dashboard
const newTaskHandler = async function(event) {
  event.preventDefault();

  const taskTitle = document.querySelector('input[name="taskTitle"]').value;
  const taskdeets = document.querySelector('textarea[name="taskDeets"]').value;
  const location = document.querySelector('input[name="location"]').value;
  const taskTime = document.querySelector('input[name="task_time"]').value;




  await fetch (`/clientpage`, {
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
};

document
  .querySelector('#newTaskForm')
  .addEventListener('submit', newTaskHandler);

  // Date picker for form
  //is the dollar sign necessary
