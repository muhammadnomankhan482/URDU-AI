document.addEventListener('DOMContentLoaded', function () {
    const studentListBody = document.getElementById('student-list-body');

    if (studentListBody) {
        // Retrieve students from localStorage
        const students = JSON.parse(localStorage.getItem('students')) || [];

        if (students.length === 0) {
            // Display a message if no students are found
            const noStudentRow = `
                <tr>
                    <td colspan="10" class="text-center">کوئی طالب علم نہیں ملا۔</td>
                </tr>
            `;
            studentListBody.innerHTML = noStudentRow;
            return;
        }

        // Clear any existing content
        studentListBody.innerHTML = '';

        // Populate the table with student data
        students.forEach((student, index) => {
            const studentRow = `
                <tr>
                    <td>${index + 1}</td>
                    <td><img src="${student.profilePic}" alt="Profile" class="profile-pic"></td>
                    <td>${student.fullName || ''}</td>
                    <td>${student.fatherName || ''}</td>
                    <td>${student.rollNo || ''}</td>
                    <td>${student.class || ''} ${student.section || ''}</td>
                    <td>${student.phone || ''}</td>
                    <td>${new Date(student.admissionDate).toLocaleDateString('ur-PK') || ''}</td>
                    <td><span class="status-badge status-${student.status.toLowerCase()}">${student.status}</span></td>
                    <td class="actions">
                        <button class="action-btn edit-btn" title="ترمیم"><i class="fas fa-edit"></i></button>
                        <button class="action-btn delete-btn" title="حذف کریں" data-id="${student.id}"><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
            `;
            studentListBody.innerHTML += studentRow;
        });

        // Add event listeners for delete buttons
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const studentId = this.getAttribute('data-id');
                if (confirm('کیا آپ واقعی اس طالب علم کو حذف کرنا چاہتے ہیں؟')) {
                    deleteStudent(parseInt(studentId));
                }
            });
        });
    }
});

function deleteStudent(studentId) {
    // Retrieve existing students
    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Filter out the student to be deleted
    students = students.filter(student => student.id !== studentId);

    // Save the updated array back to localStorage
    localStorage.setItem('students', JSON.stringify(students));

    // Refresh the page to show the updated list
    location.reload();
}
