const clientId = document.querySelector(".user-form").dataset.client;
let tableEl = document.getElementById("table");

// This function creates a new task
const newTaskHandler = async (event) => {
    event.preventDefault();

    const taskTitle = document.getElementById("taskTitle").value;
    const taskDeets = document.getElementById("taskDeets").value;
    const taskTime = document.getElementById("task_time").value;
    

    console.log(taskTitle);
    console.log(taskDeets);
    console.log(taskTime);

    const response = await fetch(`/api/task`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            "task": taskTitle,
            "task_details": taskDeets,
            "task_time": taskTime,
            "status": "Open",
            "client_id": clientId,
            "helper_id": null,
        })
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

};

//This function allows the user to view all their personal tasks.
const openTasks = async (event) => {
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
    console.log(clientId);
    let myTaskList = [];
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].client.id);
        let dataClientId = data[i].client.id;
        if (dataClientId == clientId) {
            myTaskList.push(data[i]); 
            console.log(data[i].client.id);
        }
        
    }

    for (let i = 0; i < myTaskList.length; i++) {
        console.log(myTaskList[i]);
        console.log(i);

        //Row for tasks
        trEl = document.createElement("tr");
        tableEl.appendChild(trEl);
        trEl.classList.add("table-row");


        //Task Column
        let myTasks = myTaskList[i].task;
        console.log(myTasks);

        let tdElTask = document.createElement("td");
        tdElTask.textContent = myTasks;
        trEl.appendChild(tdElTask);
        tdElTask.classList.add("task-items");

        //Time Column
        let taskTime = moment(myTaskList[i].task_time).format("dddd, MMMM Do YYYY, h:mm a");
        console.log(taskTime); 
        console.log(myTaskList[i].task_time);

        let tdElTime = document.createElement("td");
        tdElTime.textContent = taskTime;
        trEl.appendChild(tdElTime);
        tdElTime.classList.add("time-items");

        //Task Status Column
        let taskStatus = myTaskList[i].status;
        console.log(taskStatus);
        
        let tdElStatus = document.createElement("td");
        tdElStatus.textContent = taskStatus;
        trEl.appendChild(tdElStatus);
        tdElStatus.classList.add("task-status");

        //Helper Column
        let helperName;
        if (myTaskList[i].status === "Accepted") {
            helperName = myTaskList[i].helper.first_name + "" + myTaskList[i].helper.last_name;
        } else {
            helperName = "Not Accepted Yet";
        }
        console.log(helperName);

        let tdElHelper = document.createElement("td");
        tdElHelper.textContent = helperName;
        trEl.appendChild(tdElHelper);
        tdElHelper.classList.add("task-helper");
        
        //Details Button Column
        let tdElDetailsBtn = document.createElement("td");
        let detailsBtn = document.createElement("button");
        let detailsText = document.createTextNode("View Details");

        detailsBtn.appendChild(detailsText);
        trEl.appendChild(tdElDetailsBtn);
        tdElDetailsBtn.appendChild(detailsBtn);
        detailsBtn.classList.add("details-button");
        detailsBtn.setAttribute("data-index", i);
        
        //Get Modal
        let modal = document.getElementById("modal");
        let span = document.getElementsByClassName("close")[0];

        detailsBtn.addEventListener("click", function(event) {
            event.preventDefault();
            
            //matches button index with openTaskList index
            if(event.target && event.target.dataset.index !=undefined) {
                console.log(event.target.dataset.index);
                modal.style.display = "block";   
                
            }
            if(event.target.dataset.index == i) {
                console.log(myTaskList[i].task_details);
                let modalBody = document.getElementById("m-body");
                let modalHeader = document.getElementById("task-title-modal");
                let taskTitle = myTaskList[i].task;
                let taskDetails = myTaskList[i].task_details;
                console.log(taskDetails);
               
                modalHeader.textContent = taskTitle;
                modalBody.textContent = taskDetails;
                
            }
            
        });

        span.onclick = function() {
            modal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            };
        };

    };
};


        document.getElementById('submit-task-btn').addEventListener('click', newTaskHandler);
        document.getElementById('viewTaskBtn').addEventListener("click", openTasks);