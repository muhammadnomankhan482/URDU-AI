
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
    LandingPage,
    LoginPage,
    ForgotPassword,
    ResetPassword,
    SignUp
} from './pages/common';
import {
    AddEditClass,
    AddEditStudent,
    AddEditTeacher,
    AdminDashboard,
    AttendanceManagement,
    ClassManagement,
    CommunicationTools,
    ExamManagement,
    FeeManagement,
    Gradebook,
    ReportGeneration,
    StudentManagement,
    SubjectManagement,
    TeacherManagement,
    TimetableManagement,
} from './pages/schooladmin';
import {
    Attendance,
    Grades as TeacherGrades,
    Schedule as TeacherSchedule
} from './pages/teacher';
import {
    CourseMaterials,
    Grades as StudentGrades,
    Schedule as StudentSchedule
} from './pages/student';

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Common Routes */}
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />

                {/* School Admin Routes */}
                <Route path="/schooladmin/dashboard" element={<AdminDashboard />} />
                <Route path="/schooladmin/students/add" element={<AddEditStudent />} />
                <Route path="/schooladmin/students/edit/:id" element={<AddEditStudent />} />
                <Route path="/schooladmin/students" element={<StudentManagement />} />
                <Route path="/schooladmin/teachers/add" element={<AddEditTeacher />} />
                <Route path="/schooladmin/teachers/edit/:id" element={<AddEditTeacher />} />
                <Route path="/schooladmin/teachers" element={<TeacherManagement />} />
                <Route path="/schooladmin/classes/add" element={<AddEditClass />} />
                <Route path="/schooladmin/classes/edit/:id" element={<AddEditClass />} />
                <Route path="/schooladmin/classes" element={<ClassManagement />} />
                <Route path="/schooladmin/attendance" element={<AttendanceManagement />} />
                <Route path="/schooladmin/gradebook" element={<Gradebook />} />
                <Route path="/schooladmin/communication" element={<CommunicationTools />} />
                <Route path="/schooladmin/reports" element={<ReportGeneration />} />
                <Route path="/schooladmin/fees" element={<FeeManagement />} />
                <Route path="/schooladmin/exams" element={<ExamManagement />} />
                <Route path="/schooladmin/timetable" element={<TimetableManagement />} />
                <Route path="/schooladmin/subjects" element={<SubjectManagement />} />

                {/* Teacher Routes */}
                <Route path="/teacher/attendance" element={<Attendance />} />
                <Route path="/teacher/grades" element={<TeacherGrades />} />
                <Route path="/teacher/schedule" element={<TeacherSchedule />} />

                {/* Student Routes */}
                <Route path="/student/materials" element={<CourseMaterials />} />
                <Route path="/student/grades" element={<StudentGrades />} />
                <Route path="/student/schedule" element={<StudentSchedule />} />
            </Routes>
        </Router>
    );
};

export default App;
