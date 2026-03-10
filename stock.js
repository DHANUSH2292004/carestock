function addStock(){

let id = document.getElementById("medId").value;
let name = document.getElementById("medName").value;
let batch = document.getElementById("batch").value;
let qty = document.getElementById("quantity").value;
let purchase = document.getElementById("purchasePrice").value;
let selling = document.getElementById("sellingPrice").value;
let expiry = document.getElementById("expiryDate").value;
let supplier = document.getElementById("supplier").value;

if(id=="" || name==""){
alert("Please enter Medicine ID and Name");
return;
}

let table = document.getElementById("stockTable");

let row = table.insertRow();

row.insertCell(0).innerHTML = id;
row.insertCell(1).innerHTML = name;
row.insertCell(2).innerHTML = batch;
row.insertCell(3).innerHTML = qty;
row.insertCell(4).innerHTML = purchase;
row.insertCell(5).innerHTML = selling;
row.insertCell(6).innerHTML = expiry;
row.insertCell(7).innerHTML = supplier;

let status = row.insertCell(8);

if(qty < 10){
status.innerHTML = "Low Stock";
status.classList.add("low");
}
else{
status.innerHTML = "Available";
status.classList.add("available");
}

let action = row.insertCell(9);
action.innerHTML = "<button class='delete-btn' onclick='deleteRow(this)'>Delete</button>";

clearFields();

}

function deleteRow(btn){
let row = btn.parentNode.parentNode;
row.remove();
}

function clearFields(){

document.getElementById("medId").value="";
document.getElementById("medName").value="";
document.getElementById("batch").value="";
document.getElementById("quantity").value="";
document.getElementById("purchasePrice").value="";
document.getElementById("sellingPrice").value="";
document.getElementById("expiryDate").value="";
document.getElementById("supplier").value="";

}
