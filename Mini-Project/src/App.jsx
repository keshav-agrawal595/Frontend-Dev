import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getAllStudents, addStudent, updateStudent, deleteStudent } from './services/studentService';
import './index.css';

function App() {
  const [students, setStudents] = useState([]);
  const [view, setView] = useState('list'); // 'list', 'form', 'details'
  const [selectedStudent, setSelectedStudent] = useState(null); // For Edit or Details
  const [loading, setLoading] = useState(false);

  // Load Students
  const handleLoadStudents = async () => {
    setLoading(true);
    try {
      const data = await getAllStudents();
      setStudents(data);
    } catch (error) {
      console.error("Error loading students:", error);
      alert("Failed to load students. Make sure JSON Server is running.");
    } finally {
      setLoading(false);
    }
  };

  // Add Student Click
  const handleAddClick = () => {
    setSelectedStudent(null);
    setView('form');
  };

  // Edit Student Click
  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setView('form');
  };

  // View Details Click
  const handleViewDetailsClick = (student) => {
    setSelectedStudent(student);
    setView('details');
  };

  // Delete Student
  const handleDeleteClick = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await deleteStudent(id);
        alert("Student deleted successfully! Click 'Load Students' to refresh.");
        // As per instructions: "After adding/editing/deleting → show an alert and let them click the 'Load Students' button again"
        // So we don't auto-refresh here.
        setView('list');
      } catch (error) {
        console.error("Error deleting student:", error);
        alert("Failed to delete student.");
      }
    }
  };

  // Save Student (Add or Update)
  const handleSaveStudent = async (studentData) => {
    try {
      if (studentData.id) {
        // Update
        await updateStudent(studentData.id, studentData);
        alert("Student updated successfully! Click 'Load Students' to refresh.");
      } else {
        // Add
        await addStudent(studentData);
        alert("Student added successfully! Click 'Load Students' to refresh.");
      }
      setView('list');
    } catch (error) {
      console.error("Error saving student:", error);
      alert("Failed to save student.");
    }
  };

  // Cancel Form / Back from Details
  const handleBackToList = () => {
    setView('list');
    setSelectedStudent(null);
  };

  return (
    <div className="app-container">
      <h1>Student Result Management System</h1>
      
      {view === 'list' && (
        <StudentList 
          students={students}
          onLoadStudents={handleLoadStudents}
          onAddStudent={handleAddClick}
          onEditStudent={handleEditClick}
          onDeleteStudent={handleDeleteClick}
          onViewDetails={handleViewDetailsClick}
          loading={loading}
        />
      )}

      {view === 'form' && (
        <StudentForm 
          key={selectedStudent ? selectedStudent.id : 'new'} // Force remount to reset state
          studentToEdit={selectedStudent}
          onSave={handleSaveStudent}
          onCancel={handleBackToList}
        />
      )}

      {view === 'details' && (
        <StudentDetails 
          student={selectedStudent}
          onBack={handleBackToList}
        />
      )}
    </div>
  );
}

export default App;
