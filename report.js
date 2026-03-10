function showReport()
{

let type = document.getElementById("reportType").value;

let sales = document.getElementById("salesTable");
let stock = document.getElementById("stockTable");
let expiry = document.getElementById("expiryTable");


sales.classList.add("hidden");
stock.classList.add("hidden");
expiry.classList.add("hidden");


if(type === "sales")
{
sales.classList.remove("hidden");
}

else if(type === "stock")
{
stock.classList.remove("hidden");
}

else
{
expiry.classList.remove("hidden");
}

}