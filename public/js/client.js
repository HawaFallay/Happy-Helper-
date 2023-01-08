
        // Taskhandler
        const newTaskHandler = async (event) => {
            event.preventDefault();

            // const taskTitle = document.querySelector('#taskTitle').value;
            // const taskdeets = document.querySelector('#taskDeets').value;
            // const taskTime = document.querySelector('#task_time').value;

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
                    "client_id": document.querySelector(".user-form").dataset.client,
                    "helper_id": null,
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);

            //const taskTime = document.querySelector('input[type="date"]').value;


            // get method to retrieve from database and display it in the client page
            //james goslin
            //console.log(taskTime, taskTitle, taskdeets);

            // await fetch(`/api/task`, {
            //     method: 'POST',
            //     body: JSON.stringify({
            //         "task":taskTitle,
            //         "task_details":taskDeets,
            //         "task_time":taskTime,
            //     }),
            //     headers: { 'Content-Type': 'application/json' },
            // });
            // //document.location.replace('/clientpage');
            // document.querySelector('#newTaskForm')
            // document.addEventListener('submit', newTaskHandler)}
            // console.log(taskTime, taskTitle, taskdeets);
        };

        //document.querySelector('#newTaskForm')
        //document.addEventListener('submit', newTaskHandler)}
        document.getElementById('submit-task-btn').addEventListener('click', newTaskHandler);