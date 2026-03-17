hadocument.addEventListener('DOMContentLoaded', function () {
    // Update stats cards
    updateStatsCards();

    // Update absent list
    updateAbsentList();
});

function updateStatsCards() {
    // Get students from localStorage
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const studentCount = students.length;

    // Update the 'Total Students' card
    const studentCountElement = document.querySelector('.card.students .card-info p');
    if (studentCountElement) {
        studentCountElement.textContent = studentCount.toLocaleString('ur-PK');
    }

    // --- Placeholder for other stats ---
    // You can add logic here to update teachers, attendance, and income
    // For now, they will remain static as per the HTML.
}

function updateAbsentList() {
    const absentList = document.querySelector('.absent-list');
    const students = JSON.parse(localStorage.getItem('students')) || [];

    if (absentList) {
        absentList.innerHTML = ''; // Clear static content

        if (students.length === 0) {
            absentList.innerHTML = '<li>کوئی طالب علم رجسٹرڈ نہیں ہے۔</li>';
            return;
        }

        // For demonstration, let's mark the first 2 students (if they exist) as absent.
        // In a real application, this would come from an attendance module.
        const absentStudents = students.slice(0, 2);

        if (absentStudents.length === 0) {
            absentList.innerHTML = '<li>آج کوئی بھی غیر حاضر نہیں ہے۔</li>';
            return;
        }

        absentStudents.forEach(student => {
            const listItem = `
                <li>
                    <img src="${student.profilePic || 'https://via.placeholder.com/40'}" class="student-photo"/>
                    <span><strong>${student.fullName}</strong> (${student.class || 'N/A'}-${student.section || 'A'})</span>
                    <button class="btn-sm-notify">والدین کو اطلاع دیں</button>
                </li>
            `;
            absentList.innerHTML += listItem;
        });
    }
}
