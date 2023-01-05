import React from 'react'
import InputForm from './components/InputForm';
import StudentGrid from './components/StudentGrid';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <InputForm />
      <StudentGrid />
    </div>
  )
}

export default App;