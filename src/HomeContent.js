// Import required modules from 'react' and 'react-router-dom'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomBox from './Box';
// Import custom components
import Button from './Button';
// Page0 component
const HomeContent = () => {
  const navigate = useNavigate();

  // Function to handle button click and navigate to page1
  function handleClick(event) {
    navigate('/page0');
    localStorage.clear();
  }

  return (
    <div  >
      {/*HomePge Content*/}
      <CustomBox width ="500px" height= "550px"><p>
         Welcome! This website is designed to assist you in evaluating whether 
         your science objective is well-suited for GPU-enabled computing. 


         <br></br><br></br>The assessment comprises four pages containing a series of questions 
         that you will answer in sequence. Upon completion, the summary page 
         will provide tailored feedback based on your responses. Should your 
         science objective align favorably with GPU-enabled computing, the 
         feedback will include a set of steps you can take to initiate the GPU 
         porting process.

         <br></br><br></br>You are not required to answer all the questions 
         in one sitting; feel free to leave the tab open and return later if
         you need to take a break. Your answers will be automatically saved
	 in the form, ensuring your progress is preserved.</p>
      </CustomBox>
      
      {/*Button Component*/}
      <Button
        text="Start Evaluation"
        onClick={handleClick}
        style={{  marginLeft :"320px", marginBottom:"100px"}}
      />
      
    </div>
    

  );
};

export default HomeContent;
