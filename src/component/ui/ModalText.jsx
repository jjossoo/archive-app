import React, { useState } from 'react';
import './ModalText.css';

const ModalText = (props) => {


  return (
    <div className="ModalCard">
      <p>{props.title}</p>
      <div>
        <textarea
        rows="7"
        value={props.value}
        onChange={props.onChange}
            placeholder="여기에 작성해보세요 ..." />
      </div>
    </div>
  );
};

export default ModalText;





//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Submitted:', text);
//     setText('');
//   };