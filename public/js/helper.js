// const newHelper = async (event) => {
//     event.preventDefault();

//     const response = await fetch(`/api/helpers`, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//     });
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     } 
//     const data = await response.json();
//     console.log(data);
// };

// document.getElementById('helper-form').addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log("button works");
// });

// const testBtn = document.getElementById('testBtn');

// testBtn.addEventListener('click', async () => {
//     console.log("button works");
// });
