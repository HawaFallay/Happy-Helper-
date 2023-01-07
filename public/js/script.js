//fetch request from the landing page
//const name = document.getElementById("name").value;
// const email = document.getElementById("email").value;
// const password = document.getElementById("password").value;


console.log("script tag is working")

function passwordCheckerBc (event) {
    // all package will be available under zxcvbnts
    event.preventDefault();
    const options = {
      translations: zxcvbnts['language-en'].translations,
      graphs: zxcvbnts['language-common'].adjacencyGraphs,
      dictionary: {
        ...zxcvbnts['language-common'].dictionary,
        ...zxcvbnts['language-en'].dictionary,
      },
    }
    const password = document.getElementById('password').value;
    zxcvbnts.core.zxcvbnOptions.setOptions(options);
    const results = zxcvbnts.core.zxcvbn(password);
    let passwordStrength = document.getElementById('passwordStrength')
    let passwordFeedback = document.getElementById('passwordFeedback')
    passwordStrength.style.display = "block";
    // passwordFeedback.style.display = "block";
    let resultsScore = results.score;
    let resultsGuesses = results.guesses;

    if (resultsScore === 0) {
      passwordStrength.style.width = '5%';
      passwordStrength.style.background = 'red';
      passwordFeedback.innerHTML = `This password could be cracked in ${resultsGuesses} guesses`;

    }
    else if (resultsScore === 1) {
      passwordStrength.style.width = '15%';
      passwordStrength.style.background = 'orange';
      passwordFeedback.innerHTML = `This password could be cracked in ${resultsGuesses} guesses`;
    }
    else if (resultsScore === 2) {
      passwordStrength.style.width = '35%';
      passwordStrength.style.background = 'yellow';
      passwordFeedback.innerHTML = `This password could be cracked in ${resultsGuesses} guesses`;
    }
    else if (resultsScore === 3) {
      passwordStrength.style.width = '55%';
      passwordStrength.style.background = 'light green';
      passwordFeedback.innerHTML = `This password could be cracked in ${resultsGuesses} guesses`;
    }
    else if (resultsScore === 4) {
      passwordStrength.style.width = '100%';
      passwordStrength.style.background = 'lightgreen';
      passwordFeedback.innerHTML = `This password could be cracked in ${resultsGuesses} guesses`;
    }

}

let passwordStrengthChecker = document.getElementById('password');
passwordStrengthChecker.addEventListener('keyup',passwordCheckerBc);

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

