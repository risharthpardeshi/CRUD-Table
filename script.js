var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["rollNumber"] = document.getElementById("rollNumber").value;
    formData["subject"] = document.getElementById("subject").value;
    formData["marks"] = document.getElementById("marks").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("studentInfo").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.rollNumber;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.subject;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.marks;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}  


function validateInput(rollNumber) {
    // Get all of the rows in the table
    var rows = document.getElementsByTagName("tr");
  
    // Loop through each row
    for (var i = 0; i < rows.length; i++) {
      // Get the cells in the row
      var cells = rows[i].getElementsByTagName("td");
  
      // If the roll number and student name in the current row match the input, return false
      if (cells[1].innerHTML == rollNumber) {
        return false;
      }
    }
  
    // If no matching rows were found, return true
    return true;
  }
  validateInput();

  function addRow() {
    // Get the roll number and student name from the input fields
    var rollNumber = document.getElementById("rollNumber").value;
  
    // Validate the input
    if (validateInput(rollNumber)) {
        validateInput(rollNumber);
    } else {
      // If the input is invalid, display an error message
      alert("Error: Roll number and student name combination must be unique.");
    }
    addRow();
  }
  
  

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollNumber").value = selectedRow.cells[1].innerHTML;
    document.getElementById("subject").value = selectedRow.cells[2].innerHTML;
    document.getElementById("marks").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.rollNumber;
    selectedRow.cells[2].innerHTML = formData.subject;
    selectedRow.cells[3].innerHTML = formData.marks;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('studentInfo').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("name").value = '';
    document.getElementById("rollNumber").value = '';
    document.getElementById("subject").value = '';
    document.getElementById("marks").value = '';
    selectedRow = null;
}
