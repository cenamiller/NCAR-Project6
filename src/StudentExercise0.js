// Importing necessary dependencies and components
import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import CustomTooltip from './ToolTip';
import Button from './Button';
import CustomBox from './Box';
import Logic from './logic';





const StudentExercise0 = () => {

  // State variables
  const [make, setMakefile] = useState(localStorage.getItem('make') || '');
  const [flex, setFlexibility] = useState(localStorage.getItem('flex') || '');
  const [rcs, setRCS] = useState(localStorage.getItem('rcs') || '');
  const [verify, setVerify] = useState(localStorage.getItem('verify') || '');
  const [submitted, setSubmitted] = useState(false);
  //const [resultMessage, setResultMessage] = useState('');
  const [showAnswers, setShowAnswers] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMakefile(localStorage.getItem('make') || '');
    setFlexibility(localStorage.getItem('flex') || '');
    setRCS(localStorage.getItem('rcs') || '');
    setVerify(localStorage.getItem('verify') || '');
  }, []);

  useEffect(() => {
    // Call the Logic function to execute the code
    const results = Logic();
    console.log("Results from Logic:", results);
  }, []);

  
  

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'make') {
      setMakefile(value);
    } else if (name === 'flex') {
      setFlexibility(value);
    } else if (name === 'rcs') {
      setRCS(value);
    } else if (name === 'verify') {
      setVerify(value);
    }
    // Store the updated values in local storage
    localStorage.setItem(name, value);
  };


  // Function to handle form submission
  //This function outputs answers based on the user's yes/no answers
  const handleSubmit = (e) => {
    e.preventDefault();

    if (make && flex && rcs && verify ) {
      setSubmitted(true);

      // Navigate to page 1
      navigate('/page1'); 
     
    } else {
      //This message is shown when the user does not answer all the questions
      alert('Please answer all questions.'); 
    }
  };

  // Function to clear options and reset the form
  const clearOptions = (e) => {
    e.preventDefault();
    setMakefile('');
    setFlexibility('');
    setRCS('');
    setVerify('');
    //setResultMessage ("");
    setShowAnswers(false);
  };

  function handleOnClick2(event) {
    navigate('/'); // Function to navigate back to the home page
  };

  return (
    <div >
      <form onSubmit={handleSubmit} style = {{ alignment: "center"}}>
        <CustomBox width ="500px" height= "550px">
        <div>
          <ol>
            <br></br>
            <li><div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Question 1 - MakeFile */}
              Do you have a Makefile created for your code?
                <CustomTooltip title="A Makefile is a script-like text file used to 
                      automate the compilation and building of software projects by 
	              defining rules for dependencies and actions needed to generate target 
	              files." placement="right" />
              </div></li><br></br>
            
            <div id="options">
              <label>
                <input
                  type="radio"
                  name="make"
                  value="yes"
                  checked={make === 'yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label style = {{marginLeft: "60px"}}>
                <input
                  type="radio"
                  name="make"
                  value="no"
                  checked={make === 'no'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div><br></br>
            {/* Question 2 - Flexibility*/}
            <li><div style={{ display: 'flex', alignItems: 'center' }}>
            Do you have the ability to flexibly execute your code by other users?
               <CustomTooltip title="The ablity to flexibly execute your code by other 
                      users allows other developers ton contribute to code development." placement="right" />
            </div></li><br></br>

            <div id="options2">
          
              <label>
                <input
                  type="radio"
                  name="flex"
                  value="yes"
                  checked={flex === 'yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label style = {{marginLeft: "60px"}}>
                <input
                  type="radio"
                  name="flex"
                  value="no"
                  checked={flex === 'no'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div><br></br>
            {/* Question 3 - Git */}
            <li><div style={{ display: 'flex', alignItems: 'center' }}>
               Is your code in a revision control system like Git?
               <CustomTooltip title="Use of a revision control system like Git enables 
                        the management of developers contribution to your code." placement="right" />
            </div></li><br></br>
            <div id="options3">
              <label>
                <input
                  type="radio"
                  name="rcs"
                  value="yes"
                  checked={rcs === 'yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label style = {{marginLeft: "60px"}}>
                <input
                  type="radio"
                  name="rcs"
                  value="no"
                  checked={rcs === 'no'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div><br></br>
            {/* Question 4 - non-bit-for-bit*/}
            <li><div style={{ display: 'flex', alignItems: 'center' }}>
               Do you have a way to determine non-bit-for-bit answer changes from software bugs?
                <CustomTooltip title="GPU-enablement of code frequently involves a change to the 
				  order of operations.  So you need to be able to distinguish 
				  between an acceptible change and a code bug." placement="right" />
            </div></li><br></br>
            <div id="options4">
              <label>
                <input
                  type="radio"
                  name="verify"
                  value="yes"
                  checked={verify === 'yes'}
                  onChange={handleInputChange}
                />{' '}
                Yes
              </label>
              <label style = {{marginLeft: "60px"}}>
                <input
                  type="radio"
                  name="verify"
                  value="no"
                  checked={verify === 'no'}
                  onChange={handleInputChange}
                />{' '}
                No
              </label>
            </div><br></br>
                
          </ol>
        </div><br></br>
        </CustomBox>
        {/*<Box sx={{ width: '60px', height: '40px', border: '1px solid black', marginLeft:"623px" }}></Box>*/}

      
        <div style = {{marginLeft: "253.5px", marginBottom: "100px"}}>
        <Button text=" Back " onClick={handleOnClick2}/>
        <Button text="Clear" onClick={clearOptions} style ={{ marginLeft : "10px" , marginRight:"10px"}}/>{/*Clear Button*/}
        <Button text="Next" style = {{ }}/> {/*Submit Button*/}
        
        
        
       
        </div>
        
      </form><br></br>
  
    </div>
  );
};

export default StudentExercise0;  


