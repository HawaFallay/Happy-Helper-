let tableEl = document.getElementById("table");

//Row element
let trEl = document.createElement("tr");
tableEl.appendChild(trEl);
trEl.classList.add("table-row");

//Task Column
let tdElTask = document.createElement("td");

//Client Column
let tdElClient = document.createElement("td");

//Time Column
let tdElTime = document.createElement("td");

//Location Column
let tdElLocation = document.createElement("td");

//Details Button Column
let tdElDetailsBtn = document.createElement("td");
let detailsBtn = document.createElement("button");
let detailsText = document.createTextNode("Get Details");

//Accept button column
let tdElAccpetBtn = document.createElement("td");
let acceptBtn = document.createElement("button");
let acceptText = document.createTextNode("Accept");

//Decline button column
let tdElDeclineBtn = document.createElement("td");
let declineBtn = document.createElement("button");
let declineText = document.createTextNode("Decline");

//This function displays a list of unaccepted tasks.
const availableTasks = async (event) => {
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
        console.log(data[i].status);
        let dataT = data[i].status;
        
        if (dataT === "Open") {
            openTaskList.push(data[i]);
        }  
        console.log(dataT);
    }

    for (let i = 0; i < openTaskList.length; i++) {
        console.log (openTaskList[i]);
        console.log(i);
        
        
        

        //Task Column
        let openTask = openTaskList[i].task;
        console.log(openTask);

        tdElTask.textContent = openTask;
        trEl.appendChild(tdElTask);
        tdElTask.classList.add("task-items");

        //Client Column
        let fullName = openTaskList[i].client.first_name + " " + openTaskList[i].client.last_name;
        console.log(fullName);
        
        tdElClient.textContent = fullName;
        trEl.appendChild(tdElClient);
        tdElClient.classList.add("client-items");
        
        //Time Column
        let taskTime = openTaskList[i].task_time;
        console.log(taskTime);
        
        tdElTime.textContent = taskTime;
        trEl.appendChild(tdElTime);

        //Location Column
        let location = openTaskList[i].client.location;
        console.log(location);
        
        tdElLocation.textContent = location;
        trEl.appendChild(tdElLocation);

        //Details button column
        
        detailsBtn.appendChild(detailsText);
        trEl.appendChild(tdElDetailsBtn);
        tdElDetailsBtn.appendChild(detailsBtn);
        detailsBtn.classList.add("details-button");
        detailsBtn.setAttribute("data-index", i);

        //Accept button column
        
        acceptBtn.appendChild(acceptText);
        trEl.appendChild(tdElAccpetBtn);
        tdElAccpetBtn.appendChild(acceptBtn);
        acceptBtn.classList.add("accept-button");
        acceptBtn.setAttribute("data-index", i);
        acceptBtn.setAttribute("data-status", openTaskList[i].status);
        acceptBtn.setAttribute("data-task", openTaskList[i].id);

        //Decline button column
        
        declineBtn.appendChild(declineText);
        trEl.appendChild(tdElDeclineBtn);
        tdElDeclineBtn.appendChild(declineBtn);
        declineBtn.classList.add("decline-button");
        
        //Get the modal
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
                console.log(openTaskList[i].task_details);
                let modalBody = document.getElementById("m-body");
                let modalHeader = document.getElementById("task-title-modal");
                let taskTitle = openTaskList[i].task;
                let taskDetails = openTaskList[i].task_details;
                console.log(taskDetails);
               
                modalHeader.textContent = taskTitle;
                modalBody.textContent = taskDetails;
                
            }
            
        });

        span.onclick = function() {
            mtDetails.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            };
        };
        
        //Accept Request
        acceptBtn.addEventListener("click", async function(event) {
            event.preventDefault();
            if (event.target && event.target.dataset.index !=undefined) {
                console.log(event.target.dataset.index);
                console.log(event.target.dataset.status);
                console.log(event.target.dataset.task);
                
                const response2 = await fetch(`/api/task/${event.target.dataset.task}`, {
                    method: 'PUT',
                    headers: { 
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({
                        "status": "Accepted",
                        "helper_id": document.querySelector(".user-form").dataset.helper,
                    })
                });
                const result2 = await response2.json();
                console.log(result2);

                // const response3 = await fetch(`/api/task/${event.target.dataset.task}`, {
                //     method: 'PUT',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({
                //         "helper_id": document.querySelector(".user-form").dataset.helper
                //     })
                // });
                // const result3 = await response3.json();
                // console.log(result3);
            }
        })
    }  

};

const acceptedTasks = async (event) => {
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
    let acceptedTaskList = [];
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].status);
        let dataT = data[i].status;

        if (dataT === "Accepted") {
            acceptedTaskList.push(data[i]);
        }
        console.log(dataT);
    }

    for (let i = 0; i < acceptedTaskList.length; i++) {
        console.log(acceptedTaskList[i]);

        //Task Column
        let acceptedTask = acceptedTaskList[i].task;
        console.log(acceptedTask);

        tdElTask.textContent = acceptedTask;
        trEl.appendChild(tdElTask)
    }
}
    


document.getElementById('availTaskBtn').addEventListener('click', availableTasks);

//This function clears the task list section before rendering the section.
function clearTable() {
    tableEl.innerHTML = "";
}
