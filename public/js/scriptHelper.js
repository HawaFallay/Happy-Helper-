const newHelper = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/helpers`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        alert("something went wrong");
    }
    const data = await response.json();
    console.log(data);
};

document.getElementById('.submit-form').addEventListener('submit', newHelper);