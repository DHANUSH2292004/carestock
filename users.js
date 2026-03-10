document.addEventListener("DOMContentLoaded", function() {

    const PatientForm = document.getElementById("PatientForm");

    if (PatientForm){
        PatientForm.addEventListener("submit", function (event) {

        let fullName = document.querySelector("input[name='full_name']").value.trim();
        let phone = document.querySelector("input[name='phone']").value.trim();
        let emergency = document.querySelector("input[name='emergency_contact']").value.trim();
        let bloodGroup = document.querySelector("input[name='blood_group']").value.trim();

        // Name validation
        if (fullName.length < 3) {
            alert("Full Name must be at least 3 characters.");
            event.preventDefault();
            return;
        }

        // Phone number validation (10 digits)
        let phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Phone number must be 10 digits.");
            event.preventDefault();
            return;
        }

        // Emergency contact validation
        if (!phonePattern.test(emergency)) {
            alert("Emergency contact must be 10 digits.");
            event.preventDefault();
            return;
        }

        // Blood group validation
        let bloodPattern = /^(A|B|AB|O)[+-]$/i;
        if (!bloodPattern.test(bloodGroup)) {
            alert("Enter valid blood group (Example: A+, O-, AB+)");
            event.preventDefault();
            return;
        }

        // Confirmation before update
        let confirmUpdate = confirm("Are you sure you want to update patient details?");
        if (!confirmUpdate) {
            event.preventDefault();
        }
    });
}

    });
