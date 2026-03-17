document.addEventListener('DOMContentLoaded', function() {
    // --- Data Retrieval ---
    const allStudents = JSON.parse(localStorage.getItem('students')) || [];
    const allExams = JSON.parse(localStorage.getItem('exams')) || [];
    const allMarks = JSON.parse(localStorage.getItem('marksData')) || {};
    const allDateSheets = JSON.parse(localStorage.getItem('dateSheets')) || {};

    // --- UI Elements ---
    const examSelect = document.getElementById('exam-select');
    const classSelect = document.getElementById('class-select');
    const studentSelect = document.getElementById('student-select');
    const generateBtn = document.getElementById('generate-report-btn');
    const reportContainer = document.getElementById('report-card-container');

    // --- Populate Selectors ---
    function populateExams() {
        allExams.forEach(exam => {
            examSelect.innerHTML += `<option value="${exam.id}">${exam.name}</option>`;
        });
    }

    function populateClasses() {
        const classes = [...new Set(allStudents.map(s => s.class))].filter(Boolean);
        classes.forEach(c => {
            classSelect.innerHTML += `<option value="${c}">${c}</option>`;
        });
    }

    function populateStudents() {
        const selectedClass = classSelect.value;
        studentSelect.innerHTML = '<option value="">طالب علم منتخب کریں</option>'; // Reset
        if (selectedClass) {
            const studentsInClass = allStudents.filter(s => s.class === selectedClass);
            studentsInClass.forEach(student => {
                studentSelect.innerHTML += `<option value="${student.rollNo}">${student.fullName} (${student.rollNo})</option>`;
            });
        }
    }

    // --- Event Listeners ---
    classSelect.addEventListener('change', populateStudents);
    generateBtn.addEventListener('click', generateReportCard);

    // --- Report Card Generation ---
    function generateReportCard() {
        const examId = examSelect.value;
        const classVal = classSelect.value;
        const studentRollNo = studentSelect.value;

        if (!examId || !classVal || !studentRollNo) {
            alert('براہ کرم امتحان، کلاس، اور طالب علم منتخب کریں۔');
            return;
        }

        const student = allStudents.find(s => s.rollNo === studentRollNo);
        const exam = allExams.find(e => e.id == examId);

        // Find all subjects for this exam and class from the date sheet
        const subjectsForClass = (allDateSheets[examId] || []).filter(p => p.class === classVal).map(p => p.subject);

        let totalObtained = 0;
        let totalMarks = 0;
        let marksRows = '';
        let allSubjectsHaveMarks = true;

        for (const subject of subjectsForClass) {
            const marksKey = `${examId}-${classVal}-${subject}`;
            const marksEntry = (allMarks[marksKey] || []).find(m => m.studentId === studentRollNo);

            if (marksEntry) {
                const obtained = parseInt(marksEntry.obtainedMarks) || 0;
                const total = parseInt(marksEntry.totalMarks) || 100;
                totalObtained += obtained;
                totalMarks += total;
                marksRows += `<tr><td>${subject}</td><td>${total}</td><td>${obtained}</td></tr>`;
            } else {
                marksRows += `<tr><td>${subject}</td><td>100</td><td>N/A</td></tr>`;
                allSubjectsHaveMarks = false; // Mark that some marks are missing
            }
        }

        const percentage = totalMarks > 0 ? ((totalObtained / totalMarks) * 100).toFixed(2) : 0;

        const reportCardHTML = `
            <div class="report-card">
                <div class="rc-header">
                    <h2>اسکول کا نام</h2>
                    <p>${exam.name} - مارک شیٹ</p>
                </div>
                <div class="rc-student-info">
                    <p><strong>طالب علم کا نام:</strong> ${student.fullName}</p>
                    <p><strong>رول نمبر:</strong> ${student.rollNo}</p>
                    <p><strong>کلاس:</strong> ${student.class}</p>
                </div>
                <table class="rc-marks-table">
                    <thead>
                        <tr>
                            <th>مضمون</th>
                            <th>کل نمبر</th>
                            <th>حاصل کردہ نمبر</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${marksRows}
                    </tbody>
                </table>
                <div class="rc-footer">
                    <p>کل نمبر: ${totalMarks}</p>
                    <p>حاصل کردہ نمبر: ${totalObtained}</p>
                    <p>فیصد: ${percentage}%</p>
                </div>
                 <p style="text-align:center; margin-top: 20px;"><button onclick="window.print()">پرنٹ کریں</button></p>
            </div>
        `;

        reportContainer.innerHTML = reportCardHTML;
        if (!allSubjectsHaveMarks) {
            alert('انتباہ: کچھ مضامین کے نمبر درج نہیں ہیں۔');
        }
    }

    // --- Initial Load ---
    populateExams();
    populateClasses();
});
