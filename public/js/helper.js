//const { TableHints } = require("sequelize");

let ul = document.getElementById("task-list");

const newHelper = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/task`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    let openTaskList = [];
    for (let i = 0; i < data.length; i++) {
        let dataT = data[i].taskStatus.status;
        if (dataT === "Open") {
            openTaskList.push(data[i]);
        }  
        console.log(dataT);
    
    }

    for (let i = 0; i < openTaskList.length; i++) {
        console.log (openTaskList[i]);

        
         
        
        let tableEl = document.getElementById("table");

        //Row element
        let trEl = document.createElement("tr");
        tableEl.appendChild(trEl);
        trEl.classList.add("table-row");

        //Task Column
        let openTask = openTaskList[i].task;
        console.log(openTask);
        let tdElTask = document.createElement("td");
        tdElTask.textContent = openTask;
        trEl.appendChild(tdElTask);
        tdElTask.classList.add("task-items");

        //Client Column
        let fullName = openTaskList[i].client.first_name + " " + openTaskList[i].client.last_name;
        console.log(fullName);
        let tdElClient = document.createElement("td");
        tdElClient.textContent = fullName;
        trEl.appendChild(tdElClient);
        tdElClient.classList.add("client-items");

        //Task Details Column
        // let taskDetails = openTaskList[i].task_details;
        // console.log(taskDetails);
        // let tdElDetails = document.createElement("td");
        // tdElDetails.textContent = taskDetails;
        // trEl.appendChild(tdElDetails);
        
        //Time Column
        let taskTime = openTaskList[i].task_time;
        console.log(taskTime);
        let tdElTime = document.createElement("td");
        tdElTime.textContent = taskTime;
        trEl.appendChild(tdElTime);

        //Location Column
        let location = openTaskList[i].client.location;
        console.log(location);
        let tdElLocation = document.createElement("td");
        tdElLocation.textContent = location;
        trEl.appendChild(tdElLocation);

        //Details button column
        let tdElDetailsBtn = document.createElement("td");
        let detailsBtn = document.createElement("button");
        let detailsText = document.createTextNode("Get Details");
        detailsBtn.appendChild(detailsText);
        trEl.appendChild(tdElDetailsBtn);
        tdElDetailsBtn.appendChild(detailsBtn);
        detailsBtn.classList.add("details-button");

        //Accept button column
        let tdElAccpetBtn = document.createElement("td");
        let acceptBtn = document.createElement("button");
        let acceptText = document.createTextNode("Accept");
        acceptBtn.appendChild(acceptText);
        trEl.appendChild(tdElAccpetBtn);
        tdElAccpetBtn.appendChild(acceptBtn);
        acceptBtn.classList.add("accept-button");

        //Decline button column
        let tdElDeclineBtn = document.createElement("td");
        let declineBtn = document.createElement("button");
        let declineText = document.createTextNode("Decline");
        declineBtn.appendChild(declineText);
        trEl.appendChild(tdElDeclineBtn);
        tdElDeclineBtn.appendChild(declineBtn);
        declineBtn.classList.add("decline-button");
        
        
        

        // let listEl = document.createElement("li");
        // let listElTime = document.createElement("li");
        
        // const acceptText = document.createTextNode("Accept");
        // const declineText = document.createTextNode("Decline");
        // listEl.textContent = openTask;
        // listElTime.textContent = taskTime;
        // ul.appendChild(listEl);
        // listEl.appendChild(listElTime);
        // listElTime.appendChild(acceptBtn);
        // listElTime.appendChild(declineBtn);
        // acceptBtn.appendChild(acceptText);
        // declineBtn.appendChild(declineText);
        // listEl.classList.add("column");
        // listEl.classList.add("list");
        // acceptBtn.classList.add("accept-button");
        // declineBtn.classList.add("decline-button");
    }  
};

document.getElementById('availTaskBtn').addEventListener('click', newHelper);
