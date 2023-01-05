import React, { useState } from 'react';
import formatDate from '../config/helper';
import { useStudent } from '../context/StudentProvider';


const INITIAL_DATA = {
    id: null,
    name: '',
    rollNo: '',
    checkInDateTime: '',
    checkOutDateTime:''
}

const InputForm = () => {

    const {studentData, setStudentData} = useStudent();

    const [data, setData] = useState(INITIAL_DATA);

    const handleChange = (e) => {
        setData(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const studentObj = {...data};
        studentObj.checkInDateTime = formatDate();
        studentObj.id = Math.floor((Math.random() * 1000) + 1) + Date.now();

        setStudentData({type: 'CHECKIN', payload: studentObj});

        setData(INITIAL_DATA);

    }



    return (
        <div className='details-section'>
            <h2>Student Details</h2>
            <form className='student-form' onSubmit={handleSubmit}>
                <div className="form-group">
                    
                    <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={data.name}
                    required={true}
                    placeholder='Enter name'
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                    type="text" 
                    name='rollNo' 
                    id="rollNo"
                    value={data.rollNo}
                    required={true} 
                    placeholder='Enter roll no.'
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <button type='submit'
                    >CHECK-IN</button>
                </div>
            </form>
        </div>
    )
}

export default InputForm;