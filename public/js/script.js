const password = document.getElementById("password").value;

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

