const helperId = document.querySelector(".user-form").dataset.helper;
let tableEl = document.getElementById("table");

//This function displays a list of unaccepted tasks.
const availableTasks = async (event) => {
    //event.preventDefault();
    clearTable();
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

    //Row Headers
    let trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    trEl.classList.add("table-row");
    let thElTask = document.createElement("th");
    thElTask.textContent = "Task";
    trEl.appendChild(thElTask);
    thElTask.classList.add("tHead1");
    thElTask.classList.add("task-header");
    let thElUser = document.createElement("th");
    thElUser.textContent = "User";
    trEl.appendChild(thElUser);
    thElUser.classList.add("tHead2");
    let thElTime = document.createElement("th");
    thElTime.textContent = "Time";
    trEl.appendChild(thElTime);
    thElTime.classList.add("tHead3");
    let thElLoc = document.createElement("th");
    thElLoc.textContent = "Location";
    trEl.appendChild(thElLoc);
    thElLoc.classList.add("tHead4");
    let thElAct = document.createElement("th");
    thElAct.textContent = "Actions";
    trEl.appendChild(thElAct);
    thElAct.classList.add("tHead5");


    for (let i = 0; i < openTaskList.length; i++) {
        console.log (openTaskList[i]);
        console.log(i);

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
        
        //Time Column
        let taskTime = moment(openTaskList[i].task_time).utc().format("YYYY.MM.DD HH:MM A");
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
        detailsBtn.setAttribute("data-index", i);

        //Accept button column
        let tdElAccpetBtn = document.createElement("td");
        let acceptBtn = document.createElement("button");
        let acceptText = document.createTextNode("Accept");
        acceptBtn.appendChild(acceptText);
        trEl.appendChild(tdElAccpetBtn);
        tdElAccpetBtn.appendChild(acceptBtn);
        acceptBtn.classList.add("accept-button");
        acceptBtn.setAttribute("data-index", i);
        acceptBtn.setAttribute("data-status", openTaskList[i].status);
        acceptBtn.setAttribute("data-task", openTaskList[i].id);

        //Decline button column
        // let tdElDeclineBtn = document.createElement("td");
        // let declineBtn = document.createElement("button");
        // let declineText = document.createTextNode("Decline");
        // declineBtn.appendChild(declineText);
        // trEl.appendChild(tdElDeclineBtn);
        // tdElDeclineBtn.appendChild(declineBtn);
        // declineBtn.classList.add("decline-button");
        
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
            modal.style.display = "none";
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
            };
        });
    };  
};
availableTasks();


const acceptedTasks = async (event) => {
    event.preventDefault();
    clearTable();
    const response = await fetch(`/api/task`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    console.log(helperId);
    let acceptedTaskList = [];
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].status);
        let dataT = data[i].status;

        if (dataT == "Accepted") {
            acceptedTaskList.push(data[i]);
        }
        console.log(dataT);
    }

    //Row Headers
    let trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    trEl.classList.add("table-row");
    let thElTask = document.createElement("th");
    thElTask.textContent = "Task";
    trEl.appendChild(thElTask);
    thElTask.classList.add("tHead1");
    thElTask.classList.add("task-header");
    let thElUser = document.createElement("th");
    thElUser.textContent = "User";
    trEl.appendChild(thElUser);
    thElUser.classList.add("tHead2");
    let thElTime = document.createElement("th");
    thElTime.textContent = "Time";
    trEl.appendChild(thElTime);
    thElTime.classList.add("tHead3");
    let thElLoc = document.createElement("th");
    thElLoc.textContent = "Location";
    trEl.appendChild(thElLoc);
    thElLoc.classList.add("tHead4");
    let thElHelper = document.createElement("th");
    thElHelper.textContent = "Helper";
    trEl.appendChild(thElHelper);
    thElHelper.classList.add("tHead5e")
    let thElAct = document.createElement("th");
    thElAct.textContent = "Actions";
    trEl.appendChild(thElAct);
    thElAct.classList.add("tHead6e");

    let helperAcceptedTasks = [];
    for (let i = 0; i < acceptedTaskList.length; i++) {
        console.log(acceptedTaskList[i]);
        let dataHelperId = acceptedTaskList[i].helper.id;
        if (dataHelperId == helperId) {
            helperAcceptedTasks.push(acceptedTaskList[i]);
            console.log(acceptedTaskList[i].helper.id);
        }
    }

    for (let i =0; i < helperAcceptedTasks.length; i++) {
        console.log(helperAcceptedTasks[i]);
    
        //Row element
        let trEl = document.createElement("tr");
        tableEl.appendChild(trEl);
        trEl.classList.add("table-row");

        //Task Column
        let acceptedTask = helperAcceptedTasks[i].task;
        console.log(acceptedTask);
        let tdElTask = document.createElement("td");
        tdElTask.textContent = acceptedTask;
        trEl.appendChild(tdElTask);
        tdElTask.classList.add("task-items");

        //Client Column
        let fullName = helperAcceptedTasks[i].client.first_name + " " + helperAcceptedTasks[i].client.last_name;
        console.log(fullName);
        let tdElClient = document.createElement("td");
        tdElClient.textContent = fullName;
        trEl.appendChild(tdElClient);
        tdElClient.classList.add("client-items");

        //Time Column
        let taskTime = moment(helperAcceptedTasks[i].task_time).utc().format("YYYY.MM.DD HH:MM A");
        console.log(taskTime);
        let tdElTime = document.createElement("td");
        tdElTime.textContent = taskTime;
        trEl.appendChild(tdElTime);

        //Location Column
        let location = helperAcceptedTasks[i].client.location;
        console.log(location);
        let tdElLocation = document.createElement("td");
        tdElLocation.textContent = location;
        trEl.appendChild(tdElLocation);

        //Helper Column
        let helperName = helperAcceptedTasks[i].helper.first_name + " " + helperAcceptedTasks[i].helper.last_name;
        console.log(helperName);
        let tdElHelper = document.createElement("td");
        tdElHelper.textContent = helperName;
        trEl.appendChild(tdElHelper);

        //Details button column
        let tdElDetailsBtn = document.createElement("td");
        let detailsBtn = document.createElement("button");
        let detailsText = document.createTextNode("Get Details");
        detailsBtn.appendChild(detailsText);
        trEl.appendChild(tdElDetailsBtn);
        tdElDetailsBtn.appendChild(detailsBtn);
        detailsBtn.classList.add("details-button");
        detailsBtn.setAttribute("data-index", i);

        //Complete button column
        let tdElCompleteBtn = document.createElement("td");
        let completeBtn = document.createElement("button");
        let completeText = document.createTextNode("Completed");
        completeBtn.appendChild(completeText);
        trEl.appendChild(tdElCompleteBtn);
        tdElCompleteBtn.appendChild(completeBtn);
        completeBtn.classList.add("complete-button");
        completeBtn.setAttribute("data-index", i);
        completeBtn.setAttribute("data-status", helperAcceptedTasks[i].status);
        completeBtn.setAttribute("data-task", helperAcceptedTasks[i].id);

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
                console.log(helperAcceptedTasks[i].task_details);
                let modalBody = document.getElementById("m-body");
                let modalHeader = document.getElementById("task-title-modal");
                let taskTitle = helperAcceptedTasks[i].task;
                let taskDetails = helperAcceptedTasks[i].task_details;
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

        //Compete Task Button
        completeBtn.addEventListener("click", async function(event) {
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
                        "status": "Completed",
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
            };
        });
    };
};
    
const completedTasks = async (event) => {
    event.preventDefault();
    clearTable();
    const response = await fetch(`/api/task`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    let completedTaskList = [];
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].status);
        let dataT = data[i].status;
        
        if (dataT === "Completed") {
            completedTaskList.push(data[i]);
        }  
        console.log(dataT);
    }

    //Row Headers
    let trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    trEl.classList.add("table-row");
    let thElTask = document.createElement("th");
    thElTask.textContent = "Task";
    trEl.appendChild(thElTask);
    thElTask.classList.add("tHead1");
    thElTask.classList.add("task-header");
    let thElUser = document.createElement("th");
    thElUser.textContent = "User";
    trEl.appendChild(thElUser);
    thElUser.classList.add("tHead2");
    let thElTime = document.createElement("th");
    thElTime.textContent = "Time";
    trEl.appendChild(thElTime);
    thElTime.classList.add("tHead3");
    let thElLoc = document.createElement("th");
    thElLoc.textContent = "Location";
    trEl.appendChild(thElLoc);
    thElLoc.classList.add("tHead4");
    let thElAct = document.createElement("th");
    thElAct.textContent = "Actions";
    trEl.appendChild(thElAct);
    thElAct.classList.add("tHead5");

    for (let i = 0; i < completedTaskList.length; i++) {
        console.log (completedTaskList[i]);
        console.log(i);

        //Row element
        let trEl = document.createElement("tr");
        tableEl.appendChild(trEl);
        trEl.classList.add("table-row");
        
        //Task Column
        let completedTask = completedTaskList[i].task;
        console.log(completedTask);
        let tdElTask = document.createElement("td");
        tdElTask.textContent = completedTask;
        trEl.appendChild(tdElTask);
        tdElTask.classList.add("task-items");

        //Client Column
        let fullName = completedTaskList[i].client.first_name + " " + completedTaskList[i].client.last_name;
        console.log(fullName);
        let tdElClient = document.createElement("td");
        tdElClient.textContent = fullName;
        trEl.appendChild(tdElClient);
        tdElClient.classList.add("client-items");
        
        //Time Column
        let taskTime = completedTaskList[i].task_time;
        console.log(taskTime);
        let tdElTime = document.createElement("td");
        tdElTime.textContent = taskTime;
        trEl.appendChild(tdElTime);

        //Location Column
        let location = completedTaskList[i].client.location;
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
        detailsBtn.setAttribute("data-index", i);

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
                console.log(completedTaskList[i].task_details);
                let modalBody = document.getElementById("m-body");
                let modalHeader = document.getElementById("task-title-modal");
                let taskTitle = completedTaskList[i].task;
                let taskDetails = completedTaskList[i].task_details;
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


document.getElementById('availTaskBtn').addEventListener('click', availableTasks);
document.getElementById('acceptedTaskBtn').addEventListener('click', acceptedTasks);
document.getElementById('completeTaskBtn').addEventListener('click', completedTasks);
//This function clears the task list section before rendering the section.
function clearTable() {
    tableEl.innerHTML = "";
}
