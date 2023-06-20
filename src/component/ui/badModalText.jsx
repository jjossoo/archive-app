import React, { useState } from 'react';
import './ModalText.css';

const badModalText = (props) => {


  const handleInputChange = (event) => {
    props.setBadtext(event.target.value);
  };

  return (
    <div className="ModalCard">
      <div>
        <input 
            type="text" 
            value={props.badtext} 
            onChange={handleInputChange}
            placeholder="여기에 작성해보세요 ..." />
      </div>
    </div>
  );
};

export default badModalText;





//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Submitted:', text);
//     setText('');
//   };