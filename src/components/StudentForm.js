import React, { useState } from 'react';
import './StudentForm.css';

function StudentForm() {
  const [name, setName] = useState('Zunaira');
  const [className, setClassName] = useState('Play Group');
  const [feePaid, setFeePaid] = useState(20000);
  const [balance, setBalance] = useState(2000);
  const [date, setDate] = useState('2025-05-04');

  const handleClear = () => {
    setName('');
    setClassName('');
    setFeePaid('');
    setBalance('');
    setDate('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    // You can send the data to backend or localStorage here
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <hr />
      <div className="row">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Class:</label>
        <select value={className} onChange={(e) => setClassName(e.target.value)}>
          <option>Play Group</option>
          <option>Nursery</option>
          <option>LKG</option>
          <option>UKG</option>
        </select>
      </div>

      <div className="row">
        <label>Fee Paid:</label>
        <input type="number" value={feePaid} onChange={(e) => setFeePaid(e.target.value)} />
        <label>Balance:</label>
        <input type="number" value={balance} onChange={(e) => setBalance(e.target.value)} />
      </div>

      <div className="row">
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <div className="pdf-button">
          <button type="button">📄</button>
        </div>
      </div>

      <div className="buttons">
        <button className="submit" type="submit">Submit</button>
        <button className="clear" type="button" onClick={handleClear}>Clear</button>
      </div>
    </form>
  );
}

export default StudentForm;
