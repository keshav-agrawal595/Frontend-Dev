import React, { useState } from 'react';

function StudentList({ students, onLoadStudents, onAddStudent, onEditStudent, onDeleteStudent, onViewDetails, loading }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'marks') return b.marks - a.marks;
    if (sortBy === 'grade') return a.grade.localeCompare(b.grade);
    return 0;
  });

  const totalPages = Math.ceil(sortedStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedStudents = sortedStudents.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="student-list">
      <h2>Student List</h2>
      <div className="header-actions">
        <button className="btn primary" onClick={onLoadStudents} disabled={loading}>
          {loading ? 'Loading...' : 'Load Students'}
        </button>
        <button className="btn success" onClick={onAddStudent}>Add Student</button>
      </div>

      {students.length > 0 && (
        <div className="filters">
          <input 
            type="text" 
            placeholder="Search by name, section, or grade..." 
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
            className="search-input"
          />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
            <option value="name">Sort by Name</option>
            <option value="marks">Sort by Marks</option>
            <option value="grade">Sort by Grade</option>
          </select>
        </div>
      )}
      
      {students.length === 0 ? (
        <div className="empty-state">
          <p>No students found. Click "Load Students" to fetch data.</p>
        </div>
      ) : filteredStudents.length === 0 ? (
        <div className="empty-state">
          <p>No students match your search.</p>
        </div>
      ) : (
        <>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Section</th>
                  <th>Marks</th>
                  <th>Grade</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td><span className="badge">{student.section}</span></td>
                    <td><span className="marks-badge">{student.marks}</span></td>
                    <td><span className={`grade-badge grade-${student.grade.toLowerCase()}`}>{student.grade}</span></td>
                    <td className="action-buttons">
                      <button className="btn info" onClick={() => onViewDetails(student)}>View</button>
                      <button className="btn warning" onClick={() => onEditStudent(student)}>Edit</button>
                      <button className="btn danger" onClick={() => onDeleteStudent(student.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                className="btn secondary" 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="page-info">Page {currentPage} of {totalPages}</span>
              <button 
                className="btn secondary" 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default StudentList;