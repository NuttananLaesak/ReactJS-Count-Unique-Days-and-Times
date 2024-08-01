import React, { useState, useEffect } from 'react';
import { processMockupData } from './processMockupData';
import mockupData from './mockupData.json';
import './App.css'; 

const App = () => {
  const [data, setData] = useState({ x: [], y: [] });

  useEffect(() => {
    const result = processMockupData(mockupData);
    setData(result);
  }, []);

  return (
    <div className="container">
      <h1>หาวันเเละเวลาที่ไม่ซ้ำกัน</h1>
      <div>
        <h2>x: Array ({data.x.length})</h2>
        <ul>
          {data.x.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>y: Array ({data.y.length})</h2>
        <ul>
          {data.y.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
