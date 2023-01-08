let tableEl = document.getElementById("table");
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
        let dataT = data[i].taskStatus.status;
        if (dataT === "Open") {
            openTaskList.push(data[i]);
        }
        console.log(dataT);
    }

    for (let i = 0; i < openTaskList.length; i++) {
        console.log(openTaskList[i]);
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
        detailsBtn.setAttribute("data-index", i);

        //Get the modal
        let modal = document.getElementById("modal");
        let span = document.getElementsByClassName("close")[0];

        detailsBtn.addEventListener("click", function (event) {
            event.preventDefault();

            //matches button index with openTaskList index
            if (event.target && event.target.dataset.index != undefined) {
                console.log(event.target.dataset.index);
                modal.style.display = "block";

            }
            if (event.target.dataset.index == i) {
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

        span.onclick = function () {
            mtDetails.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            };
        };
    }
        document.getElementById('availTaskBtn').addEventListener('click', availableTasks);


        // Taskhandler
        const newTaskHandler = async function (event) {
            event.preventDefault();

            const taskTitle = document.querySelector('#taskTitle').value;
            const taskdeets = document.querySelector('#taskDeets').value;
            const location = document.querySelector('#location').value;
            const taskTime = document.querySelector('#task_time').value;
            //const taskTime = document.querySelector('input[type="date"]').value;


            // get method to retrieve from database and display it in the client page
            //james goslin
            console.log(taskTime, taskTitle, taskdeets);

            await fetch(`/api/task`, {
                method: 'POST',
                body: JSON.stringify({
                    "task":taskTitle,
                    "task_details":taskdeets,
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
            .addEventListener('submit', newTaskHandler)}