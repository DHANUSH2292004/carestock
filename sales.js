function calculateAmount(element) {
    let row = element.closest("tr");
    let qty = row.querySelector(".qty").value || 0;
    let price = row.querySelector(".price").value || 0;
    let amount = qty * price;

    row.querySelector(".amount").value = amount.toFixed(2);

    calculateGrandTotal();
}

function calculateGrandTotal() {
    let amounts = document.querySelectorAll(".amount");
    let total = 0;

    amounts.forEach(function(item) {
        total += parseFloat(item.value) || 0;
    });

    document.getElementById("grandTotal").innerText = total.toFixed(2);
}

function applyDiscount() {
    let discount = document.getElementById("discount").value || 0;
    let total = 0;

    document.querySelectorAll(".amount").forEach(function(item) {
        total += parseFloat(item.value) || 0;
    });

    let finalTotal = total - (total * discount / 100);
    document.getElementById("grandTotal").innerText = finalTotal.toFixed(2);
}

function addRow() {
    let table = document.getElementById("billTable").getElementsByTagName('tbody')[0];

    let newRow = table.insertRow();

    newRow.innerHTML = `
        <td><input type="text"></td>
        <td><input type="text"></td>
        <td><input type="number" class="qty" oninput="calculateAmount(this)"></td>
        <td><input type="text"></td>
        <td><input type="number"></td>
        <td><input type="number" class="price" oninput="calculateAmount(this)"></td>
        <td><input type="date"></td>
        <td><input type="number" class="amount" readonly></td>
    `;
}

function printbill(){
    window,print();
}

function generatebillno(){
    let billnumber=localStorage.getItem("billno");
    if(billnumber===null){
        billnumber=1;
    }
    else{
        billnumber=parseInt(billnumber)+1;
    }
    localStorage.setItem("billnumber",billnumber);
    document.getElementById("billno").value="bill-"+billnumber;
}
window.onload=generatebillno;