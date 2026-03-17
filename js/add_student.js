document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.student-form');

    form.addEventListener('submit', (event) => {
        // Prevent the default form submission which reloads the page
        event.preventDefault();

        // Create an object to hold the student data
        const studentData = {
            fullName: document.getElementById('fullName').value,
            fatherName: document.getElementById('fatherName').value,
            className: document.getElementById('class').value,
            dob: document.getElementById('dob').value,
            mobileNumber: document.getElementById('mobileNumber').value,
            admissionDate: document.getElementById('admissionDate').value,
            address: document.getElementById('address').value
        };

        // For now, let's just log the data to the console and show an alert
        console.log("Captured Student Data:", studentData);

        // Create a user-friendly message
        const message = `نئے طالب علم کی معلومات کامیابی سے حاصل کر لی گئی ہیں:

نام: ${studentData.fullName}
والد کا نام: ${studentData.fatherName}
کلاس: ${studentData.className}

ڈیٹا جلد ہی ڈیٹا بیس میں محفوظ کیا جائے گا۔`;

        alert(message);

        // Clear the form for the next entry
        form.reset();
    });
});
