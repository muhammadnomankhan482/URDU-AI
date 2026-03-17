
document.addEventListener('DOMContentLoaded', function () {
    const studentForm = document.querySelector('form');
    if (studentForm) {
        studentForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission

            const profilePicFile = document.getElementById('profilePic').files[0];
            const reader = new FileReader();

            reader.onloadend = function () {
                // This will be the base64 encoded image string
                const profilePicData = reader.result;

                // Create a student object from the form data
                const studentData = {
                    id: Date.now(), // Use timestamp as a unique ID
                    profilePic: profilePicData || 'https://via.placeholder.com/40',
                    fullName: document.getElementById('fullName')?.value,
                    fatherName: document.getElementById('fatherName')?.value,
                    dob: document.getElementById('dob')?.value,
                    gender: document.getElementById('gender')?.value,
                    class: document.getElementById('class')?.value,
                    section: document.getElementById('section')?.value,
                    rollNo: document.getElementById('rollNo')?.value,
                    admissionDate: document.getElementById('admissionDate')?.value,
                    phone: document.getElementById('phone')?.value,
                    email: document.getElementById('email')?.value,
                    address: document.getElementById('address')?.value,
                    status: 'active' // Default status
                };

                // Retrieve existing students from localStorage, or initialize an empty array
                let students = JSON.parse(localStorage.getItem('students')) || [];

                // Add the new student to the array
                students.push(studentData);

                // Save the updated array back to localStorage
                localStorage.setItem('students', JSON.stringify(students));
                
                // Give feedback to the user
                alert('طالب علم کی معلومات کامیابی سے محفوظ ہو گئیں۔');

                // Redirect to the student listing page
                window.location.href = 'student_listing.html';
            };

            if (profilePicFile) {
                // Read the image file as a Data URL
                reader.readAsDataURL(profilePicFile);
            } else {
                // If no image is selected, proceed without it
                reader.onloadend();
            }
        });
    }
});
