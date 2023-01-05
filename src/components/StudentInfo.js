import React from 'react'

const StudentInfo = ({ student, onLeaveClick, onRemoveClick }) => {

    const {id, name, rollNo, checkInDateTime, checkOutDateTime} = student;
  return (
    <div className='student-container'>
        <div className="student-details">
            <span>{name}</span>
            <span>{rollNo}</span>
        </div>
        <div className="timing-details">
            <span>Entry Time: {checkInDateTime}</span>
            <span>Exit Time: {checkOutDateTime}</span>
        </div>
        <div>
        {!checkOutDateTime &&
        <button onClick={() => onLeaveClick(id)}>
            Leave
        </button>
        }
        <button onClick={() => onRemoveClick(id)}>
            Remove
        </button>
        </div>
        
    </div>
  )
}

export default StudentInfo;