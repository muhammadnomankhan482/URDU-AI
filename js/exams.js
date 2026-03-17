document.addEventListener('DOMContentLoaded', function() {
    // --- Main Tab Functionality ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(button.dataset.tab).classList.add('active');
        });
    });

    // --- Global Data Retrieval ---
    const students = JSON.parse(localStorage.getItem('students')) || [];
    
    // --- Create Exam Functionality ---
    const saveExamBtn = document.getElementById('save-exam-btn');
    const examList = document.getElementById('exam-list');
    const examNameInput = document.getElementById('exam-name');
    const startDateInput = document.getElementById('start-date');

    saveExamBtn.addEventListener('click', () => {
        if (!examNameInput.value || !startDateInput.value) {
            alert('براہ کرم امتحان کا نام اور تاریخ آغاز درج کریں۔');
            return;
        }
        const exams = JSON.parse(localStorage.getItem('exams')) || [];
        exams.push({ id: Date.now(), name: examNameInput.value, startDate: startDateInput.value });
        localStorage.setItem('exams', JSON.stringify(exams));
        alert('امتحان کامیابی سے محفوظ ہو گیا ہے۔');
        examNameInput.value = '';
        startDateInput.value = '';
        displayExams();
        populateExamSelectors(); // Update selectors in other tabs
    });

    function displayExams() {
        const exams = JSON.parse(localStorage.getItem('exams')) || [];
        examList.innerHTML = '<h4>محفوظ شدہ امتحانات:</h4>' + (exams.length === 0 ? '<p>ابھی تک کوئی امتحان نہیں بنایا گیا۔</p>' : 
            '<ul>' + exams.map(exam => `<li><strong>${exam.name}</strong> (شروع ہونے کی تاریخ: ${exam.startDate})</li>`).join('') + '</ul>');
    }

    // --- Date Sheet Functionality ---
    const examSelectDS = document.getElementById('exam-select-ds');
    const classSelectDS = document.getElementById('class-select-ds');
    const addPaperBtn = document.getElementById('add-paper-btn');
    const dateSheetDisplay = document.getElementById('date-sheet-display');

    addPaperBtn.addEventListener('click', () => {
        const examId = examSelectDS.value;
        const classVal = classSelectDS.value;
        const subject = document.getElementById('subject-name').value;
        const paperDate = document.getElementById('paper-date').value;
        const paperTime = document.getElementById('paper-time').value;

        if (!examId || !classVal || !subject || !paperDate || !paperTime) {
            alert('براہ کرم تمام خانوں کو پُر کریں۔');
            return;
        }

        const dateSheets = JSON.parse(localStorage.getItem('dateSheets')) || {};
        if (!dateSheets[examId]) dateSheets[examId] = [];
        dateSheets[examId].push({ class: classVal, subject, date: paperDate, time: paperTime });
        localStorage.setItem('dateSheets', JSON.stringify(dateSheets));
        alert('پرچہ کامیابی سے ڈیٹ شیٹ میں شامل کر دیا گیا ہے۔');
        displayDateSheet(examId);
    });
    
    examSelectDS.addEventListener('change', () => displayDateSheet(examSelectDS.value));

    function displayDateSheet(examId) {
        const dateSheets = JSON.parse(localStorage.getItem('dateSheets')) || {};
        const papers = dateSheets[examId] || [];
        const exam = (JSON.parse(localStorage.getItem('exams')) || []).find(e => e.id == examId);
        let html = `<h4>${exam ? exam.name : 'منتخب شدہ امتحان'} کی ڈیٹ شیٹ</h4>`;
        if (papers.length === 0) {
            html += '<p>اس امتحان کے لیے کوئی ڈیٹ شیٹ نہیں بنائی گئی۔</p>';
        } else {
             html += '<table class="modern-table"><thead><tr><th>کلاس</th><th>مضمون</th><th>تاریخ</th><th>وقت</th></tr></thead><tbody>';
             papers.sort((a,b) => new Date(a.date) - new Date(b.date) || a.time.localeCompare(b.time));
             papers.forEach(paper => {
                html += `<tr><td>${paper.class}</td><td>${paper.subject}</td><td>${paper.date}</td><td>${paper.time}</td></tr>`;
             });
             html += '</tbody></table>';
        }
        dateSheetDisplay.innerHTML = html;
    }

    // --- Marks Entry Functionality ---
    const examSelectME = document.getElementById('exam-select-me');
    const classSelectME = document.getElementById('class-select-me');
    const subjectSelectME = document.getElementById('subject-select-me');
    const loadStudentsBtn = document.getElementById('load-students-btn');
    const marksEntryTableContainer = document.getElementById('marks-entry-table-container');

    classSelectME.addEventListener('change', populateSubjectsForMarksEntry);

    function populateSubjectsForMarksEntry() {
        const examId = examSelectME.value;
        const classVal = classSelectME.value;
        const dateSheets = JSON.parse(localStorage.getItem('dateSheets')) || {};
        const papers = (dateSheets[examId] || []).filter(p => p.class === classVal);
        const subjects = [...new Set(papers.map(p => p.subject))];
        
        subjectSelectME.innerHTML = '<option value="">مضمون منتخب کریں</option>';
        subjects.forEach(subject => {
            subjectSelectME.innerHTML += `<option value="${subject}">${subject}</option>`;
        });
    }

    loadStudentsBtn.addEventListener('click', () => {
        const classVal = classSelectME.value;
        if (!classVal) {
            alert('براہ کرم ایک کلاس منتخب کریں۔');
            return;
        }
        const studentsInClass = students.filter(s => s.class === classVal);
        let tableHtml = `<table class="modern-table"><thead><tr><th>رول نمبر</th><th>نام</th><th>حاصل کردہ نمبر</th><th>کل نمبر</th></tr></thead><tbody>`;
        studentsInClass.forEach(student => {
            tableHtml += `<tr>
                <td>${student.rollNo}</td>
                <td>${student.fullName}</td>
                <td><input type="number" class="marks-input" data-studentid="${student.rollNo}" placeholder="نمبر"></td>
                <td><input type="number" class="total-marks-input" value="100"></td>
            </tr>`;
        });
        tableHtml += '</tbody></table><button id="save-marks-btn">نمبر محفوظ کریں</button>';
        marksEntryTableContainer.innerHTML = tableHtml;

        // Add event listener to the newly created save button
        document.getElementById('save-marks-btn').addEventListener('click', saveMarks);
    });

    function saveMarks() {
        const examId = examSelectME.value;
        const classVal = classSelectME.value;
        const subject = subjectSelectME.value;
        
        if (!examId || !classVal || !subject) {
            alert('براہ کرم امتحان، کلاس اور مضمون منتخب کریں۔');
            return;
        }

        const marksInputs = document.querySelectorAll('.marks-input');
        const marksData = JSON.parse(localStorage.getItem('marksData')) || {};
        const key = `${examId}-${classVal}-${subject}`;
        if (!marksData[key]) marksData[key] = [];

        marksInputs.forEach(input => {
            const studentId = input.dataset.studentid;
            const obtainedMarks = input.value;
            const totalMarks = input.closest('tr').querySelector('.total-marks-input').value;

            // Remove old entry if exists
            const existingIndex = marksData[key].findIndex(m => m.studentId === studentId);
            if (existingIndex > -1) marksData[key].splice(existingIndex, 1);

            // Add new entry
            if (obtainedMarks) { // Only save if marks are entered
                marksData[key].push({ studentId, obtainedMarks, totalMarks });
            }
        });

        localStorage.setItem('marksData', JSON.stringify(marksData));
        alert('نمبر کامیابی سے محفوظ ہو گئے ہیں۔');
    }

    // --- Populate Selectors (General) ---
    function populateExamSelectors() {
        const exams = JSON.parse(localStorage.getItem('exams')) || [];
        const examSelectors = [examSelectDS, examSelectME];
        examSelectors.forEach(selector => {
            selector.innerHTML = '<option value="">امتحان منتخب کریں</option>';
            exams.forEach(exam => {
                selector.innerHTML += `<option value="${exam.id}">${exam.name}</option>`;
            });
        });
    }

    function populateClassSelectors() {
        const classes = [...new Set(students.map(s => s.class))].filter(Boolean);
        const classSelectors = [classSelectDS, classSelectME];
        classSelectors.forEach(selector => {
            selector.innerHTML = '<option value="">کلاس منتخب کریں</option>';
            classes.forEach(c => {
                selector.innerHTML += `<option value="${c}">${c}</option>`;
            });
        });
    }

    // --- Initial Calls on Page Load ---
    displayExams();
    populateExamSelectors();
    populateClassSelectors();
});
