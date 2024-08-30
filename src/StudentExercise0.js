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
  const [resultMessage, setResultMessage] = useState('');
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

      //This string is shown if user chooses one or more "No"s 
      const start = 'Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement. \xa0 In particular the following steps should be done first:';

      //This string is displayed if the user chooses No for Question 1
      const string1 = 'Create a Makefile'; 

      //This string is displayed if the user chooses No for Question 2
      const string2 = 'Add the ability to flexibly execute the code by other users'; 

      //This string is displayed if the user chooses No for Question 3
      const string3 = 'Add your code  into revision control system like Git'; 

      //This string is displayed if the user chooses No for Question 4
      const string4 = 'Develop a verification framework that allows the identification of non-bit-for-bit \n\t answer changes from software bugs'; 

      //This variables is used to create an ordered list for the output. 
      //num increments as the number of "No"s chosen by the user go 
      let num = 0 
      

      //An empty string is initialized which is later used to output the result message.
      let result = "" ; 


      if (make === "yes" && flex === "yes" && rcs === "yes" && verify === "yes"){ 
        //When user choses all "Yes"s, this string is displayed
        result = 'Your application is a good match for GPU enabled computing! :)' 
      } else {
        //If the user choose one or more "No"s, the "start" string is set to the 
        // empty "result" string
        result = start 
      }

      // Construt the result string based on user i nput 
      if(make === "no"){
        num += 1 
        // If the first answer is no, then string1  is concatenated to the "result" string
        result += '\n\t' + num + ". " + string1 
      }

      if(flex === "no"){
        // Since the answer is no, num is incremented and concatenated to the second string
        num += 1 
        // If the second answer is no, then string2 is concatenated to the "result" string
        result += "\n\t"+ num + ". " + string2 
      }
      if(rcs === "no"){
        num += 1
        // If the third answer is no, then string3 is concatenated to the "result" string
        result += "\n\t"+ num + ". " + string3 
      }

      if(verify === "no"){
        num += 1 
        // If the second answer is no, then string4 is concatenated to the "result" string
        result += "\n\t"+ num + ". " + string4
        
      }
      
      //This statement assigns "result" variable to the "ResultMessage" variable
      setResultMessage (result); 

      // This line stores result in local storage so it can be retrieved and displayed 
      // in the summary page. 
      localStorage.setItem('resultMessage', result); 

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
    setResultMessage ("");
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


