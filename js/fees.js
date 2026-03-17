document.addEventListener('DOMContentLoaded', function() {
    const students = JSON.parse(localStorage.getItem('students')) || [];

    // Tab functionality
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

    // Fee Structure Functionality
    const classForStructure = document.getElementById('class-for-structure');
    const saveStructureBtn = document.getElementById('save-structure-btn');
    const feeStructureDisplay = document.getElementById('fee-structure-display');
    populateClassSelector(classForStructure);
    displayFeeStructure();

    saveStructureBtn.addEventListener('click', () => {
        const classVal = classForStructure.value;
        if (!classVal) {
            alert('براہ کرم ایک کلاس منتخب کریں');
            return;
        }

        const feeStructure = JSON.parse(localStorage.getItem('feeStructure')) || {};
        feeStructure[classVal] = {
            tuition: document.getElementById('tuition-fee').value,
            exam: document.getElementById('exam-fee').value,
            extra: document.getElementById('extra-fee').value
        };

        localStorage.setItem('feeStructure', JSON.stringify(feeStructure));
        alert('فیس کا ڈھانچہ محفوظ ہو گیا ہے۔');
        displayFeeStructure();
    });

    function populateClassSelector(selector) {
        const classes = [...new Set(students.map(s => s.class))];
        classes.forEach(c => {
            if(c) selector.innerHTML += `<option value="${c}">${c}</option>`;
        });
    }

    function displayFeeStructure() {
        const feeStructure = JSON.parse(localStorage.getItem('feeStructure')) || {};
        let html = '<h4>محفوظ شدہ ڈھانچے:</h4>';
        if (Object.keys(feeStructure).length === 0) {
            html += '<p>ابھی تک کوئی ڈھانچہ محفوظ نہیں کیا گیا۔</p>';
        } else {
            html += '<ul>';
            for (const aClass in feeStructure) {
                html += `<li><strong>${aClass}:</strong> ٹیوشن: ${feeStructure[aClass].tuition}, امتحان: ${feeStructure[aClass].exam}, اضافی: ${feeStructure[aClass].extra}</li>`;
            }
            html += '</ul>';
        }
        feeStructureDisplay.innerHTML = html;
    }

    // Fee Collection Functionality
    const searchStudentBtn = document.getElementById('searchStudentBtn');
    const studentSearchInput = document.getElementById('studentSearchInput');
    const studentFeeDetails = document.getElementById('student-fee-details');

    searchStudentBtn.addEventListener('click', () => {
        const searchTerm = studentSearchInput.value.toLowerCase();
        const student = students.find(s => s.rollNo.toLowerCase() === searchTerm || s.fullName.toLowerCase().includes(searchTerm));
        
        if (student) {
            displayStudentFeeDetails(student);
        } else {
            studentFeeDetails.innerHTML = '<p>کوئی طالب علم نہیں ملا۔</p>';
        }
    });

    function displayStudentFeeDetails(student) {
        const feeStructure = JSON.parse(localStorage.getItem('feeStructure')) || {};
        const studentClassStructure = feeStructure[student.class];

        let detailsHtml = `<h4>${student.fullName} (رول نمبر: ${student.rollNo})</h4>`;
        if (studentClassStructure) {
             detailsHtml += `
                <p>ٹیوشن فیس: <strong>${studentClassStructure.tuition}</strong></p>
                <p>امتحانی فیس: <strong>${studentClassStructure.exam}</strong></p>
                <p>اضافی سرگرمیاں: <strong>${studentClassStructure.extra}</strong></p>
                <hr>
                <h4>فیس وصولی</h4>
                <input type="number" id="amount-received" placeholder="وصول شدہ رقم">
                <button id="collect-fee-btn">فیس وصول کریں</button>
            `;
        } else {
            detailsHtml += '<p>اس طالب علم کی کلاس کے لیے فیس کا کوئی ڈھانچہ متعین نہیں ہے۔</p>';
        }

        studentFeeDetails.innerHTML = detailsHtml;
    }
});
