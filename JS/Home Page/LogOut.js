document.addEventListener("DOMContentLoaded", function() {
    const loginIcon = document.getElementById("loginIcon");
    const dropdown = document.getElementById("myDropdown");
    const logoutOption = document.getElementById("logoutOption");
    
    // Toggle the dropdown when the login icon is clicked
    loginIcon.addEventListener("click", function() {
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    });

    // Log out when the "Log Out" option is clicked
    logoutOption.addEventListener("click", function() {
        localStorage.removeItem("token");
        alert("Logged out successfully");
        window.location.href = "http://127.0.0.1:5500/HTML/logInPage.html?";
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches("#loginIcon")) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        }
    });
});
