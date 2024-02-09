import React, { useState } from 'react';


const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('bg-primary'); // Initial background color

  const handleColorChange = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    <div className={`container ${backgroundColor}`} style={{ height: '100vh', textAlign: 'center', paddingTop: '50px' }}>
      <h1>Background Color Changer</h1>

      <div className="btn-group" role="group" aria-label="Color Buttons">
        <button type="button" className="btn btn-primary" onClick={() => handleColorChange('bg-primary')}>
          Blue
        </button>
        
        <button type="button" className="btn btn-success" onClick={() => handleColorChange('bg-success')}>
          Green
        </button>
        <button type="button" className="btn btn-danger" onClick={() => handleColorChange('bg-danger')}>
          Red
        </button>
        <button type="button" className="btn btn-warning" onClick={() => handleColorChange('bg-warning')}>
          Yellow
        </button>
 
      </div>
    </div>
  );
};

export default ColorChanger;
