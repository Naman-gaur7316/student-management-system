import React from 'react'
import formatDate from '../config/helper';
import { useStudent } from '../context/StudentProvider';
import StudentInfo from './StudentInfo';


const StudentGrid = () => {
  const { studentData, setStudentData } = useStudent();

  const onLeaveClick = (id) => {
    const date = formatDate();
    setStudentData({type: 'CHECKOUT', payload: date, id: id});
  }

  const onRemoveClick = (id) => {
    setStudentData({type: 'REMOVE', id: id});
  }

  const studentCount = studentData.filter(item => !item.checkOutDateTime).length;


  // console.log(studentData)

  return (
    <div className='studentgrid'>
      <h2>Attendence</h2>
      <div className="student-count">
        <p>Total students Present</p>
        <p>{studentCount}</p>
      </div>
      <div className='studentgrid__container'>
        {studentData.map(student => (
          <StudentInfo 
          key={student.id} 
          student={student} 
          onLeaveClick={onLeaveClick} 
          onRemoveClick={onRemoveClick}>
            {student.name}
          </StudentInfo>)
          )}
      </div>
      
    </div>
  )
}

export default StudentGrid;