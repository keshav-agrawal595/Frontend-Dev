import React, { useState } from 'react';

function StudentForm({ studentToEdit, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: studentToEdit ? studentToEdit.name : '',
    section: studentToEdit ? studentToEdit.section : '',
    marks: studentToEdit ? studentToEdit.marks : '',
    grade: studentToEdit ? studentToEdit.grade : ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.section.trim()) {
      newErrors.section = 'Section is required';
    }
    
    if (!formData.marks || formData.marks < 0 || formData.marks > 100) {
      newErrors.marks = 'Marks must be between 0 and 100';
    }
    
    if (!formData.grade.trim()) {
      newErrors.grade = 'Grade is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave({
        id: studentToEdit ? studentToEdit.id : undefined,
        ...formData
      });
    }
  };

  return (
    <div className="student-form">
      <h2>{studentToEdit ? '✏️ Edit Student' : '➕ Add Student'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter student name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label>Section:</label>
          <input 
            type="text" 
            name="section" 
            value={formData.section} 
            onChange={handleChange} 
            placeholder="e.g., A, B, C"
          />
          {errors.section && <span className="error-message">{errors.section}</span>}
        </div>
        <div className="form-group">
          <label>Marks:</label>
          <input 
            type="number" 
            name="marks" 
            value={formData.marks} 
            onChange={handleChange} 
            placeholder="Enter marks (0-100)"
            min="0"
            max="100"
          />
          {errors.marks && <span className="error-message">{errors.marks}</span>}
        </div>
        <div className="form-group">
          <label>Grade:</label>
          <input 
            type="text" 
            name="grade" 
            value={formData.grade} 
            onChange={handleChange} 
            placeholder="e.g., A+, A, B+"
          />
          {errors.grade && <span className="error-message">{errors.grade}</span>}
        </div>
        <div className="form-actions">
          <button type="submit" className="btn success">💾 Save</button>
          <button type="button" className="btn secondary" onClick={onCancel}>✖️ Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;