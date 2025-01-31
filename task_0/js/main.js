var student1 = {
    firstName: "Cedric",
    lastName: "Martin",
    age: 40,
    location: "Evian"
};
var student2 = {
    firstName: "Douglas",
    lastName: "Andre",
    age: 30,
    location: "Thonon"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var tbody = document.createElement("tbody");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    var locationCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
