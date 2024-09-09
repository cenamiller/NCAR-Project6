// Importing necessary dependencies and components
import React, { useState , useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Button from './Button';
import CustomBox from './Box';
import Logic from './logic';


const StudentExercise3 = () => {
  // State variables
  const [selectedNumber, setSelectedNumber] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');
  const [numVar, setNumVar] = useState('');
  const [wordSize, setwordSize] = useState('');
  const [resultMessage4, setResultMessage4] = useState('');
  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedNumber(selectedOption);

    if (selectedOption !== "") {
      // Show the second question when the user selects an answer of first question
      document.getElementById("question2").style.display = "block";
      if (selectedOption === "1") {
        setMessage("Please enter a number");
      } else {
        setMessage(`Please enter ${selectedOption} numbers separated by commas.`);
      }
    } else {
      // Hide the second question if no option is selected
      document.getElementById("question2").style.display = "none";
      setMessage("");
    }

    // Store the selected option and second question visibility in local storage
    localStorage.setItem("selectedNumber", selectedOption);
    localStorage.setItem("question2Visible", selectedOption !== "");
  };


  // Function to handle form submission
  //This function outputs answers based on the user's answers
  const handleSubmit = () => {
    // Get the value of the input field with the id "nums"
    const numbersInput = document.getElementById("nums").value; 

    // Split the numbersInput string using commas as separators and create an array
    // Then, trim each element to remove any leading or trailing white spaces
    const numbersArray = numbersInput.split(",").map((num) => num.trim());

    // Parse the selectedNumber value into an integer
    const selectedOptionNum = parseInt(selectedNumber);

    // this condition checks if the user has entered all the inputs before clicking submit
    if(!numVar || !wordSize || !selectedNumber){
      alert("Please fill out all the feilds") //This message is shown if the user has not filled out all the inputs
      return;

    }

    // Check if number of variables and word size are integers
    if (isNaN(parseInt(numVar)) ) {
      alert("Number of variables must be integers."); //This message is shown when the user enters non-interger values for Question 2: Number of Variables
      return;
    }
    
    // Check if the length of the numbersArray is equal to the selectedOptionNum
    if (numbersArray.length === selectedOptionNum) {
      let validInputs = true; //set validInputs to true to flag valid inputs

      // Check if all input numbers are valid integers
      for (let i = 0; i < numbersArray.length; i++) {
        const number = parseInt(numbersArray[i]);
        if (isNaN(number)) {
          validInputs = false;
          break;
        }
      }

      if (validInputs) {
        // Calculate the product of all input numbers
        let product = 1;

        for (let i = 0; i < numbersArray.length; i++) {
          const number = parseInt(numbersArray[i]);
          product *= number;
        }

        //This line stores "product" variable in local storage so it can be retrieved and displayed in the summary page. 
        localStorage.setItem('product', product);
        localStorage.setItem('selectedNumber', selectedNumber);
        localStorage.setItem('numVar', numVar);
        localStorage.setItem('wordSize', wordSize);
        localStorage.setItem('inputValue', inputValue);

        const results = Logic();
        console.log("Results from Logic:", results);

        //setResultMessage4 (result);//This statement assigns "result" variable to the "ResultMessage3" variable
        localStorage.setItem('resultMessage4', result); //This line stores "result" variable in local storage so it can be retrieved and displayed in the summary page. 
        navigate('/page4'); // This line of code is used to navigate to page 4




      } else {
        alert("Please enter valid numbers separated by commas."); //This message is shown when user enters non-integer values for Question1
      }
    } else {
        if (selectedOptionNum === 1){
        alert("Please enter a number")} //This message is shown if "selectedOptionNum" is 1 but user enters more or less numbers
        else if (selectedNumber){
        
          //Below message is shown if the number of intergers entered by the user is less than or greater than "selectedOptionNum"
        alert(`Please enter ${selectedOptionNum} numbers separated by commas.`)
        }

      }

     

  
};

  
// Function to clear options and reset the form
  const handleClear = () => {

    setSelectedNumber('');
    setMessage("");
    setInputValue("");
    setResult("");
    setResultMessage4 ("");
    setwordSize(" ")
    setNumVar("")
    document.getElementById("question2").style.display = "none";

};

// function handleOnClick3(event) {navigate('/page4');};


// Navigate to '/page2' when the button is clicked
function handleOnClick(event) {navigate('/page2');};

useEffect(() => {
  // Load data from local storage when the component mounts
  const selectedOption = localStorage.getItem('selectedNumber');
  const numVarValue = localStorage.getItem('numVar');
  const wordSizeValue = localStorage.getItem('wordSize');
  const inputValueValue = localStorage.getItem('inputValue');
  const question2Visible = localStorage.getItem('question2Visible'); // Retrieve the second question visibility

  setSelectedNumber(selectedOption || ''); // Use empty string as default if null or undefined
  setNumVar(numVarValue || '');
  setwordSize(wordSizeValue || '');
  setInputValue(inputValueValue || '');

   // Set the visibility of the second question based on the value retrieved from local storage
   if (question2Visible === "true") {
    document.getElementById("question2").style.display = "block";
  } else {
    document.getElementById("question2").style.display = "none";
  }
}, []);


  return (
    <div >

      <div >
      <CustomBox width ="500px" height= "550px">
        <ol>
          {/*Question 1 */}
          <li>How many levels of nesting are there?</li><br></br>

          <select id="mySelect" value={selectedNumber} onChange={handleChange}>
            <option disabled selected value="">
              Choose a number
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <br />
          {/*Question 1a- This question is displayed after the user selects an option for question 1*/}
          <div id="question2" style={{ display: 'none' }}>
            <p id="message2">{message}</p>
            <input
              type="text"
              id="nums"
              placeholder="Enter Here"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            /> 
      
          {/*<p style = {{marginTop:"40px"}}>What kind of Return on Investment (ROI) would you expect?</p>*/}
      
          </div><br></br>
        <div>
          {/*Question 2*/}
        <li>How many variables are typically found in a loopbody expressions ? </li> <br></br>
        <input
          type="text"
          value={numVar}
          placeholder="Enter Here"
          onChange={(e) => setNumVar(e.target.value)}
          
        /></div><br></br>
        {/*Question 3 */}
        <li>Are you using 4 byte or 8 bytes floating point values ? </li><br></br>
      
          <label>
              <input
                type="radio"
                name="wordsize"
                value="4"
                checked={wordSize === "4"}
                onChange={(e) => setwordSize(e.target.value)}
              />
                4 Bytes
          </label>

  
          <label style={{ marginLeft: '70px' }}>
              <input
                type="radio"
                name="wordsize"
                value="8"
                checked={wordSize === "8"}
                onChange={(e) => setwordSize(e.target.value)}
                />
              8 Bytes
          </label>
         




        </ol>
        </CustomBox>
                
        <div style = {{marginLeft: "249px", marginBottom: "100px"}}>
          <Button text="Back" onClick={handleOnClick} style={{ padding: "10px 28px" }} /> {/* Render a button with 'Back' text, handleOnClick event handler, and custom styling */}
            {/*Submit Button*/}
            

            {/*Clear Button*/}
            <Button text = "Clear" onClick = {handleClear} style ={{ marginLeft : "10px" , marginRight:"10px"}}/>
            <Button text = "Submit" onClick = {handleSubmit} />
            
          </div> <br></br><br></br>
          {/*Get Results Button - Takes the user to the summary page*/}
          {/*<Button text = "Get Results" onClick = {handleOnClick3} style = {{ padding: "10px 28px"}}/>*/}
          
      </div>




      
      

      {/*<p>What kind of Return on Investment (ROI) would you expect?</p>*/}

      
    </div>
  );
};

export default StudentExercise3;
