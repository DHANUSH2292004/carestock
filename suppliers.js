function addSupplier(){

let id = document.getElementById("supplierId").value;
let name = document.getElementById("supplierName").value;
let contact = document.getElementById("contactPerson").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
let address = document.getElementById("address").value;

if(id=="" || name==""){
alert("Please fill Supplier ID and Name");
return;
}

let table = document.getElementById("supplierTable");

let row = table.insertRow();

row.insertCell(0).innerHTML = id;
row.insertCell(1).innerHTML = name;
row.insertCell(2).innerHTML = contact;
row.insertCell(3).innerHTML = phone;
row.insertCell(4).innerHTML = email;
row.insertCell(5).innerHTML = address;

let actionCell = row.insertCell(6);
actionCell.innerHTML = "<button class='delete-btn' onclick='deleteSupplier(this)'>Delete</button>";

clearFields();
}

function deleteSupplier(btn){
let row = btn.parentNode.parentNode;
row.remove();
}

function clearFields(){

document.getElementById("supplierId").value="";
document.getElementById("supplierName").value="";
document.getElementById("contactPerson").value="";
document.getElementById("phone").value="";
document.getElementById("email").value="";
document.getElementById("address").value="";

}