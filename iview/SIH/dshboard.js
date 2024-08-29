function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

document.getElementById('settings-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const currentPassword = document.getElementById('current-password')?.value;
    const newPassword = document.getElementById('new-password')?.value;
    const confirmPassword = document.getElementById('confirm-password')?.value;

    if (newPassword === confirmPassword) {
        alert('Settings updated successfully.');
    } else {
        alert('New passwords do not match.');
    }
});

function toggleExtraDetails() {
    const nonCommissioned = document.getElementById("non-commissioned").value;
    const extraDetails = document.getElementById("extra-details");
    extraDetails.style.display = nonCommissioned === "yes" ? "block" : "none";
}

document.getElementById('aadhar').addEventListener('input', function() {
    const aadharNumber = this.value;
    
    if (aadharNumber == '8888454563637777') {
        document.getElementById('first-name').value = 'John';
        document.getElementById('last-name').value = 'Doe';
        document.getElementById('fathers-name').value = 'Mr. Doe';
        document.getElementById('mothers-name').value = 'Mrs. Doe';
        document.getElementById('phone-number').value = '9876543210';
        document.getElementById('pan-card').value = 'ABCDE1234F';
        document.getElementById('community-certificate').value = 'CC123456789';
        document.getElementById('marks').value = '85'; 
        document.getElementById('bank-account').value = '1234567890';
        document.getElementById('non-commissioned').value = 'yes';
        toggleExtraDetails(); 
        document.getElementById('rank').value = 'Havildar'; 
        document.getElementById('discharge-book').value = 'yes';
        document.getElementById('no-arrear').value = 'yes';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    showSection('profile-section');
});
