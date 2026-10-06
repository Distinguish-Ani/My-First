// Array to store all students
let students = [];

// Function to add a student
function addstudent() {
    // Get values from the input fields
    let name = document.getElementById("name").value;
    let matric = document.getElementById("matric").value;
    let level = document.getElementById("level").value;
    let dept = document.getElementById("dept").value;

    // Conditional statement to check if all fields are filled
    if (name === "" || matric === "" || level === "" || dept === "") {
        alert("Please fill in all the student details.");
        return;
    }

    // Create a student object
    let student = {
        name: name,
        matric: matric,
        level: level,
        department: dept
    };

    console.log(student)

    // Add the student object to the array
    students.push(student);

    // Display the students
    displayStudents();

    // Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("matric").value = "";
    document.getElementById("level").value = "";
    document.getElementById("dept").value = "";
}


// Function to display all students
function displayStudents() {
    let list = document.getElementById("list");

    // Clear the list before displaying again
    list.innerHTML = "";

    // Loop through the students array
    for (let i = 0; i < students.length; i++) {

        // Create a student display
        list.innerHTML +=
            "<p>" +
            (i + 1) + ". " +
            students[i].name +
            " - " +
            students[i].matric +
            " - Level " +
            students[i].level +
            " - " +
            students[i].department +
            "</p>";
    }
}


// Function to remove the last student
function removelast() {

    // Conditional statement
    if (students.length === 0) {
        alert("There are no students to remove.");
        return;
    }

    // Remove the last student from the array
    students.pop();

    // Display the updated list
    displayStudents();
}