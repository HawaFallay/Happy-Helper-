let ul = document.getElementById("task-list");
let openTaskList = [];
const newHelper = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/taskStatus/1`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    console.log(data.tasks);
    console.log(data.tasks[0].task);
    
    for (let i = 0; i < data.tasks.length; i++) {
        let openTask = data.tasks[i].task;

        let listEl = document.createElement("li");
        let acceptBtn = document.createElement("button");
        let declineBtn = document.createElement("button");
        const acceptText = document.createTextNode("Accept");
        const declineText = document.createTextNode("Decline");
        listEl.textContent = openTask;
        ul.appendChild(listEl);
        listEl.appendChild(acceptBtn);
        listEl.appendChild(declineBtn);
        acceptBtn.appendChild(acceptText);
        declineBtn.appendChild(declineText);
        acceptBtn.classList.add("accept-button");
        declineBtn.classList.add("decline-button");
        
        
        
    }
};

document.getElementById('testBtn').addEventListener('click', newHelper);
