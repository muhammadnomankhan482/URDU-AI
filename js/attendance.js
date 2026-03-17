hdocument.addEventListener('DOMContentLoaded', function () {
    const classSelector = document.getElementById('classSelector');
    const sectionSelector = document.getElementById('sectionSelector');
    const loadStudentsBtn = document.getElementById('loadStudentsBtn');
    const saveAttendanceBtn = document.getElementById('saveAttendanceBtn');
    const attendanceListBody = document.getElementById('attendance-list-body');
    const attendanceDate = document.getElementById('attendanceDate');

    const students = JSON.parse(localStorage.getItem('students')) || [];

    // Populate class and section selectors
    populateSelectors();

    loadStudentsBtn.addEventListener('click', loadStudentsForAttendance);
    saveAttendanceBtn.addEventListener('click', saveAttendance);

    function populateSelectors() {
        const classes = [...new Set(students.map(s => s.class))];
        const sections = [...new Set(students.map(s => s.section))];

        classes.forEach(c => {
            if(c) classSelector.innerHTML += `<option value="${c}">${c}</option>`;
        });
        sections.forEach(s => {
            if(s) sectionSelector.innerHTML += `<option value="${s}">${s}</option>`;
        });
    }

    function loadStudentsForAttendance() {
        const selectedClass = classSelector.value;
        const selectedSection = sectionSelector.value;

        if (!selectedClass || !selectedSection) {
            alert('براہ کرم کلاس اور سیکشن منتخب کریں۔');
            return;
        }

        const filteredStudents = students.filter(s => s.class === selectedClass && s.section === selectedSection);

        attendanceListBody.innerHTML = ''; // Clear previous list

        if (filteredStudents.length === 0) {
            attendanceListBody.innerHTML = '<tr><td colspan="4" class="text-center">اس کلاس میں کوئی طالب علم نہیں ملا۔</td></tr>';
            saveAttendanceBtn.style.display = 'none';
            return;
        }

        filteredStudents.forEach(student => {
            const row = `
                <tr data-student-id="${student.id}">
                    <td>${student.rollNo}</td>
                    <td><img src="${student.profilePic}" alt="Profile" class="profile-pic"></td>
                    <td>${student.fullName}</td>
                    <td class="attendance-status-selector">
                        <button class="status-btn present selected" data-status="Present">حاضر</button>
                        <button class="status-btn absent" data-status="Absent">غیر حاضر</button>
                        <button class="status-btn leave" data-status="Leave">چھٹی</button>
                    </td>
                </tr>
            `;
            attendanceListBody.innerHTML += row;
        });

        // Add event listeners to new status buttons
        document.querySelectorAll('.attendance-status-selector .status-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove 'selected' from siblings
                this.parentNode.querySelectorAll('.status-btn').forEach(b => b.classList.remove('selected'));
                // Add 'selected' to the clicked button
                this.classList.add('selected');
            });
        });

        saveAttendanceBtn.style.display = 'block';
    }

    function saveAttendance() {
        const date = attendanceDate.value;
        if (!date) {
            alert('براہ کرم تاریخ منتخب کریں۔');
            return;
        }

        let attendanceData = JSON.parse(localStorage.getItem('attendance')) || {};
        if (!attendanceData[date]) {
            attendanceData[date] = {};
        }

        const rows = attendanceListBody.querySelectorAll('tr[data-student-id]');
        rows.forEach(row => {
            const studentId = row.getAttribute('data-student-id');
            const selectedStatus = row.querySelector('.status-btn.selected').dataset.status;
            
            attendanceData[date][studentId] = selectedStatus;
        });

        localStorage.setItem('attendance', JSON.stringify(attendanceData));
        alert('حاضری کامیابی سے محفوظ ہو گئی۔');
    }
});
