function manageCategories() {
    alert("Manage Categories Clicked!");
}

function addNewCategory() {
    let name = prompt("Enter Category Name:");
    let qty = prompt("Enter Available Quantity:");

    if (name && qty) {

        let container = document.getElementById("cardContainer");

        let newCard = document.createElement("div");
        newCard.classList.add("card");

        newCard.innerHTML = `
            <img src="https://cdn-icons-png.flaticon.com/512/2966/2966485.png">
            <div class="card-content">
                <p><strong>Name</strong> ${name}</p>
                <p>Available Qty <span class="qty">${qty}</span></p>
            </div>
        `;

        container.appendChild(newCard);
    }
}

//ADD MEDICINES IN THE CONTAINERS OF MEDICINES.HTML

function addmedicines(button){
    let medicinename=prompt("enter medicine name:");
     if (medicinename !== null && medicinename.trim() !== "") {

        let card = button.parentElement;
        let list = card.querySelector(".medicinelist");
        let qtySpan = card.querySelector(".qty");

        // Create list item
        let li = document.createElement("li");
        li.textContent = medicinename;
        list.appendChild(li);

        // Increase quantity
        let currentQty = Number(qtySpan.textContent)||0;
        qtySpan.textContent = currentQty + 1;
    }

}

//

function view(button) {

    let card = button.closest(".card");
    let categoryName = card.querySelector("h3").textContent;
    let medicines = card.querySelectorAll(".medicine-list li");
    let qty = card.querySelector(".qty").textContent;

    if (medicines.length === 0) {
        alert(categoryName + " stock is empty.");
        return;
    }

    let stockList = "Category: " + categoryName + "\n";
    stockList += "Total Quantity: " + qty + "\n\n";
    stockList += "Medicines:\n";

    medicines.forEach((med, index) => {
        stockList += (index + 1) + ". " + med.textContent + "\n";
    });

    alert(stockList);
}

