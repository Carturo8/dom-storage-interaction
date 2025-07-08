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