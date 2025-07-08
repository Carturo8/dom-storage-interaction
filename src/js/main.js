// Reference to the user form element
const userForm = document.getElementById('userForm');

// Event listener for form submission
userForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById('nameInput').value.trim();
    const age = document.getElementById('ageInput').value.trim();

    // Validate inputs
    if (name === '' || age === '' || isNaN(age) || Number(age) < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please enter a valid name and a non-negative age.',
        });
        return;
    }

    // Create user data object
    const userData = {
        name,
        age: Number(age),
    };

    // Store data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Show a confirmation alert
    Swal.fire({
        icon: 'success',
        title: 'Data Saved',
        text: 'Your information was successfully stored.',
        timer: 2000,
        showConfirmButton: false,
    });
});

// Function to load and display user data from localStorage
function displayStoredUserData() {
    const storedData = localStorage.getItem('userData');

    const outputElement = document.getElementById('output');

    if (!storedData) {
        outputElement.textContent = 'No user data found.';
        return;
    }

    const userData = JSON.parse(storedData);
    outputElement.textContent = `Name: ${userData.name}, Age: ${userData.age}`;
}

// Call display function on a page load
window.addEventListener('DOMContentLoaded', displayStoredUserData);
