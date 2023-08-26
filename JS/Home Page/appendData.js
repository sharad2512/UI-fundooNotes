// Sample data (replace this with your actual data or API call)
const data = [
    'id',
    'title',
    'content',
    // Add more data items as needed
];

// Function to append data to the container
function appendDataToContainer(data) {
    const container = document.getElementById('showNote');

    // Loop through the data and append each item to the container
    data.forEach((item) => {
        const dataItem = document.createElement('div');
        dataItem.textContent = item;
        container.appendChild(dataItem);
    });
}

// Call the function to append data when the page loads or as needed
window.onload = function () {
    appendDataToContainer(data); // Pass your data array here
};
