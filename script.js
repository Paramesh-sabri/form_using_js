document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;
    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (firstName === "" || lastName === "" || city === "" || address === "" || username === "" || password === "") {
        alert("All fields are required!");
        return false;
    } else if (username.length < 5) {
        alert("Username must be at least 5 characters long!");
        return false;
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long!");
        return false;
    } else if (password === username) {
        alert("Password cannot be the same as username");
        return false;
    } else {
        document.getElementById('message').textContent = 'Form submitted successfully!';
        document.getElementById('message').style.color = 'green';
        document.getElementById('registrationForm').reset();
    }
});
