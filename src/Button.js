import React from 'react';
//Button component begins here
const Button = ({ text, onClick, style}) => {
  const buttonStyle = {
    backgroundColor: '#36545d', /* Set your desired background color */
    color: 'white', /* Set the text color */
    border: 'none', /* Remove the button border */
    padding: '10px 28px', /* Adjust the paadding as needed */
    fontSize: '16px', /* Set the font size */
    cursor: 'pointer', /* Add a cursor pointer on hover */
    borderRadius: '5px',
    marginLeft: 0,
    ...style
  };

  // Change the background color on hover
  // const hoverStyle = {backgroundColor: '#45a049',};

  return (
    <button 
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
