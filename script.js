// Display current date in the banner section

function showDate() {
    document.getElementById("today").innerHTML =
        "Today is: " + new Date().toDateString();
}

window.onload = showDate;

// Slider function
function updateSlider() {
    document.getElementById("sliderValue").innerHTML =
        document.getElementById("health").value;
}

// Review button function

function reviewForm() {

    // Basic Info
    var firstName = document.getElementById("fname").value;
    var middleInitial = document.getElementById("mi").value;
    var lastName = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var ssn = document.getElementById("ssn").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var userId = document.getElementById("userid").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    // Checkboxes
    var fever = document.getElementById("fever").checked;
    var headache = document.getElementById("headache").checked;
    var cough = document.getElementById("cough").checked;
    var fatigue = document.getElementById("fatigue").checked;
    var nausea = document.getElementById("nausea").checked;

    fever = fever ? "YES" : "NO";
    headache = headache ? "YES" : "NO";
    cough = cough ? "YES" : "NO";
    fatigue = fatigue ? "YES" : "NO";
    nausea = nausea ? "YES" : "NO";

    // Radio buttons

    var gender = document.querySelector('input[name="gender"]:checked');
    var insurance = document.querySelector('input[name="insurance"]:checked');
    var vaccinated = document.querySelector('input[name="vaccinated"]:checked');

    gender = gender ? gender.value : "Not selected";
    insurance = insurance ? insurance.value : "Not selected";
    vaccinated = vaccinated ? vaccinated.value : "Not selected";

    // Slider

    var health = document.getElementById("health").value;

    var passwordError = "";

    // length check
    if (password1.length < 8 || password1.length > 30) {
        passwordError = "Password must be 8–30 characters.";
    }
    
    // uppercase check
    else if (!/[A-Z]/.test(password1)) {
        passwordError = "Password must contain 1 uppercase letter.";
    }
    
    // lowercase check
    else if (!/[a-z]/.test(password1)) {
        passwordError = "Password must contain 1 lowercase letter.";
    }
    
    // number check
    else if (!/[0-9]/.test(password1)) {
        passwordError = "Password must contain 1 number.";
    }
    
    // special character check
    else if (!/[!@#%^&*()_\-+=<>.,]/.test(password1)) {
        passwordError = "Password must contain 1 special character.";
    }
    
    // cannot match user ID
    else if (password1.toLowerCase() === userId.toLowerCase()) {
        passwordError = "Password cannot match User ID.";
    }
    
    // must match each other
    else if (password1 !== password2) {
        passwordError = "Passwords do not match.";
    }

    
    document.getElementById("reviewSection").innerHTML =
        "<h2>PLEASE REVIEW THIS INFORMATION</h2>" +
        "<p>Name: " +
        firstName + " " +
        middleInitial + " " +
        lastName +
        "</p>" +

        "<p>Date of Birth: " + dob + "</p>" +
        "<p>Social Security Number: " + ssn + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Phone Number: " + phone + "</p>" +
        "<p>Address: " + address + "</p>" +
        "<p>City: " + city + "</p>" +
        "<p>State: " + state + "</p>" +
        "<p>Zip Code: " + zip + "</p>" +

        "<hr>" +
        "<h3>REQUESTED INFO</h3>" +

        "<p>Fever: " + fever + "</p>" +
        "<p>Headache: " + headache + "</p>" +
        "<p>Cough: " + cough + "</p>" +
        "<p>Fatigue: " + fatigue + "</p>" +
        "<p>Nausea: " + nausea + "</p>" +

        "<p>Gender: " + gender + "</p>" +
        "<p>Insurance: " + insurance + "</p>" +
        "<p>Vaccinated: " + vaccinated + "</p>" +

        "<p>Health Rating: " + health + "</p>" +

        "<p>User ID: " + userId + "</p>" +
        "<p>Password Status: " + (passwordError === "" ? "PASS" : passwordError) + "</p>";
}

function validateFirstName() {

    var firstName = document.getElementById("fname").value;
    var error = document.getElementById("fnameError");

    if (firstName == "") {
        error.innerHTML = "First name is required.";
    }
    else if (!/^[A-Za-z'-]+$/.test(firstName)) {
        error.innerHTML = "Letters only.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateMI() {

    var mi = document.getElementById("mi").value;
    var error = document.getElementById("miError");

    if (mi == "") {
        error.innerHTML = "";
    }
    else if (!/^[A-Za-z]$/.test(mi)) {
        error.innerHTML = "Enter one letter only.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateLastName() {

    var lastName = document.getElementById("lname").value;
    var error = document.getElementById("lnameError");

    if (lastName == "") {
        error.innerHTML = "Last name is required.";
    }
    else if (!/^[A-Za-z'-]+$/.test(lastName)) {
        error.innerHTML = "Letters, apostrophes and dashes only.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateCity() {

    var city = document.getElementById("city").value;
    var error = document.getElementById("cityError");

    if (city == "") {
        error.innerHTML = "City is required.";
    }
    else if (!/^[A-Za-z ]+$/.test(city)) {
        error.innerHTML = "Letters only.";
    }
    else {
        error.innerHTML = "";
    }

}

function validatePhone() {

    var phone = document.getElementById("phone").value;
    var error = document.getElementById("phoneError");

    if (phone == "") {
        error.innerHTML = "Phone number is required.";
    }
    else if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
        error.innerHTML = "Use format 000-000-0000.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateEmail() {

    var email = document.getElementById("email").value.toLowerCase();
    document.getElementById("email").value = email;

    var error = document.getElementById("emailError");

    if (email == "") {
        error.innerHTML = "Email is required.";
    }
    else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        error.innerHTML = "Enter a valid email address.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateZip() {

    var zip = document.getElementById("zip").value;
    var error = document.getElementById("zipError");

    if (zip == "") {
        error.innerHTML = "ZIP Code is required.";
    }
    else if (!/^\d{5}$/.test(zip)) {
        error.innerHTML = "Enter a 5-digit ZIP Code.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateAddress() {

    var address = document.getElementById("address").value;
    var error = document.getElementById("addressError");

    if (address == "") {
        error.innerHTML = "Address is required.";
    }
    else if (address.length < 2 || address.length > 30) {
        error.innerHTML = "Address must be 2-30 characters.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateAddress2() {

    var address2 = document.getElementById("address2").value;
    var error = document.getElementById("address2Error");

    if (address2 == "") {
        error.innerHTML = "";
    }
    else if (address2.length < 2 || address2.length > 30) {
        error.innerHTML = "Address Line 2 must be 2-30 characters.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateState() {

    var state = document.getElementById("state").value;
    var error = document.getElementById("stateError");

    if (state == "") {
        error.innerHTML = "Please select a state.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateDOB() {

    var dob = document.getElementById("dob").value;
    var error = document.getElementById("dobError");

    if (dob == "") {
        error.innerHTML = "Date of Birth is required.";
        return;
    }

    var parts = dob.split("/");

    if (parts.length != 3) {
        error.innerHTML = "Use MM/DD/YYYY.";
        return;
    }

    var month = parseInt(parts[0]);
    var day = parseInt(parts[1]);
    var year = parseInt(parts[2]);

    var birthDate = new Date(year, month - 1, day);
    var today = new Date();

    if (birthDate > today) {
        error.innerHTML = "Date cannot be in the future.";
    }
    else if (today.getFullYear() - year > 120) {
        error.innerHTML = "Date cannot be more than 120 years ago.";
    }
    else {
        error.innerHTML = "";
    }

}

function formatSSN() {

    var ssn = document.getElementById("ssn");

    var numbers = ssn.value.replace(/\D/g, "");

    if (numbers.length > 3 && numbers.length <= 5) {
        numbers = numbers.slice(0,3) + "-" + numbers.slice(3);
    }
    else if (numbers.length > 5) {
        numbers = numbers.slice(0,3) + "-" +
                  numbers.slice(3,5) + "-" +
                  numbers.slice(5,9);
    }

    ssn.value = numbers;

}

function validateSSN() {

    var ssn = document.getElementById("ssn").value;
    var error = document.getElementById("ssnError");

    if (ssn == "") {
        error.innerHTML = "SSN is required.";
    }
    else if (!/^\d{3}-\d{2}-\d{4}$/.test(ssn)) {
        error.innerHTML = "Use format ###-##-####.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateUserID() {

    var userId = document.getElementById("userid").value;
    var error = document.getElementById("useridError");

    if (userId == "") {
        error.innerHTML = "User ID is required.";
    }

    else if (userId.length < 5 || userId.length > 20) {
        error.innerHTML = "User ID must be 5-20 characters.";
    }

    else if (/^[0-9]/.test(userId)) {
        error.innerHTML = "User ID cannot start with a number.";
    }

    else if (!/^[A-Za-z0-9_-]+$/.test(userId)) {
        error.innerHTML = "Only letters, numbers, underscores, and dashes allowed.";
    }

    else {
        error.innerHTML = "";
    }

}

function validatePassword() {

    var password = document.getElementById("password1").value;
    var userId = document.getElementById("userid").value;
    var error = document.getElementById("password1Error");

    if (password == "") {
        error.innerHTML = "Password is required.";
    }

    else if (password.length < 8) {
        error.innerHTML = "Password must be at least 8 characters.";
    }

    else if (!/[A-Z]/.test(password)) {
        error.innerHTML = "Must contain an uppercase letter.";
    }

    else if (!/[a-z]/.test(password)) {
        error.innerHTML = "Must contain a lowercase letter.";
    }

    else if (!/[0-9]/.test(password)) {
        error.innerHTML = "Must contain a number.";
    }

    else if (password.toLowerCase() == userId.toLowerCase()) {
        error.innerHTML = "Password cannot match User ID.";
    }

    else {
        error.innerHTML = "";
    }

}

function validatePasswordMatch() {

    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var error = document.getElementById("password2Error");

    if (password2 == "") {
        error.innerHTML = "Please re-enter your password.";
    }

    else if (password1 != password2) {
        error.innerHTML = "Passwords do not match.";
    }

    else {
        error.innerHTML = "";
    }

}

function validateForm() {

    validateFirstName();
    validateMI();
    validateLastName();
    validatePhone();
    validateAddress();
    validateAddress2();
    validateCity();
    validateState();
    validateZip();
    validateDOB();
    validateSSN();
    validateEmail();
    validateUserID();
    validatePassword();
    validatePasswordMatch();

    if (
        document.getElementById("fnameError").innerHTML == "" &&
        document.getElementById("miError").innerHTML == "" &&
        document.getElementById("lnameError").innerHTML == "" &&
        document.getElementById("phoneError").innerHTML == "" &&
        document.getElementById("addressError").innerHTML == "" &&
        document.getElementById("address2Error").innerHTML == "" &&
        document.getElementById("cityError").innerHTML == "" &&
        document.getElementById("stateError").innerHTML == "" &&
        document.getElementById("zipError").innerHTML == "" &&
        document.getElementById("dobError").innerHTML == "" &&
        document.getElementById("ssnError").innerHTML == "" &&
        document.getElementById("emailError").innerHTML == "" &&
        document.getElementById("useridError").innerHTML == "" &&
        document.getElementById("password1Error").innerHTML == "" &&
        document.getElementById("password2Error").innerHTML == ""
    ) {

        document.getElementById("submitButton").style.display = "inline";

    }

    else {

        document.getElementById("submitButton").style.display = "none";

        alert("Please correct the highlighted errors before submitting.");

    }

}
