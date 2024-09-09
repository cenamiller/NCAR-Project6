// Importing necessary dependencies and components
import React, { useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from './Button';
import CustomBox from './Box';
import Logic from './logic';

function StudentExercise2() {
   // State variables
  const [showOptions2, setShowOptions2] = useState(false);
  const [PointResult, setPointResult] = useState(0);
  const [result, setResult] = useState('');
  const [answer10, setAnswer10] = useState('');
  const [answer11, setAnswer11] = useState('');
  const [answer12, setAnswer12] = useState('');
  const [answer13, setAnswer13] = useState('');
  const [answer14, setAnswer14] = useState('');
  const [resultMessage3, setResultMessage3] = useState('');
  const navigate = useNavigate();
  const smallBrStyle = { marginBottom: '0.2em' }; 
  const product = localStorage.getItem("product")
  //const NumGP = localStorage.getItem("divisionResult")

   // Function to show the second part of question 1 when user selects "yes"
  const handleShowAdditionalQues = (event) => {
    const selectedValue = event.target.value;
    setShowOptions2(selectedValue === 'yes');
    localStorage.setItem('showOptions2', selectedValue === 'yes' ? 'true' : 'false');
    if (selectedValue === 'no') {
      setAnswer11(''); // Clear the response for Question 2 from state
      localStorage.removeItem('answer11'); // Clear the response for Question 2 from local storage
    }
  };

  // Function to caculate points

  const calculatePoints = () => {
   // let newTotalPoints = 0; //variable to keep track of calculated points
    let allOptionsSelected = true; // Flag to track if all options are selected

    if ( //condition to check if all questions have been answered
      answer10 &&
      ((answer10 === 'yes' &&
        (answer11 === 'yes' || answer11 === 'no')) ||
        answer10 === 'no') &&
      (answer12 === 'yes' || answer12 === 'no') &&
      (answer13 === 'yes' || answer13 === 'no') &&
      (answer14 === 'yes' || answer14 === 'no')
    ) {
    navigate('/page3'); // This line of code is used to navigate to page 3
    } else {
      allOptionsSelected = false; // Set the flag to false if any option is not selected
    }

    if (!allOptionsSelected) {
      alert('Please select all options before calculating points.');//display this message is all options are not selected
    } 
  };

  const handleCalculatePoints = () => {
    calculatePoints(); // Call calculatePoints 
    localStorage.setItem('answer10', answer10);
    localStorage.setItem('answer11', answer11);
    localStorage.setItem('answer12', answer12);
    localStorage.setItem('answer13', answer13);
    localStorage.setItem('answer14', answer14);
    // Call the Logic function to execute the code
    const results = Logic();
    console.log("Results from Logic:", results);
      
  };


  

  // Function to clear options and reset the form
  const clearOptions = () => {
    setAnswer10('');
    setAnswer11('');
    setAnswer12('');
    setAnswer13('');
    setAnswer14('');
    setPointResult("");
    setResult("")
    setResultMessage3 ("");
    
  };

  function handleOnClick2(event) {
    navigate('/page1'); // Navigate to '/page1' when the button is clicked
    
  };



//This function hides the second question and calls the clearOptions function. 
  const handleClearOptions = () => {
    setShowOptions2(false);
    clearOptions();
  };

    // Function to update local storage when the answer state variables change

  useEffect(() => {
    const savedAnswer = localStorage.getItem('answer10');
    const savedAnswer2 = localStorage.getItem('answer11');
    const savedAnswer3 = localStorage.getItem('answer12');
    const savedAnswer4 = localStorage.getItem('answer13');
    const savedAnswer5 = localStorage.getItem('answer14');
    const showOptions2 = localStorage.getItem('showOptions2') === 'true';

    
  if (savedAnswer !== null) setAnswer10(savedAnswer);
  if (savedAnswer2 !== null) setAnswer11(savedAnswer2);
  if (savedAnswer3 !== null) setAnswer12(savedAnswer3);
  if (savedAnswer4 !== null) setAnswer13(savedAnswer4);
  if (savedAnswer5 !== null) setAnswer14(savedAnswer5);
    setShowOptions2(showOptions2);

    if (savedAnswer === 'no') {
      localStorage.removeItem('answer11');
      setAnswer11('');
    }

    
  }, []);
  

  return (
    <div >
      <div>
      <CustomBox width ="500px" height= "550px">
      <ol>
        {/*Question 1 */}
        <div style = {{marginBottom: "18px"}}>
        <li>Does a GPU version of your code already exist?</li>
        </div>
        <label>
          <input
            type="radio"
            name="answer10"
            value="yes"
            onClick={handleShowAdditionalQues}
            checked={answer10 === 'yes'}
            onChange={(e) => setAnswer10(e.target.value)}
          />{' '}
          Yes 
        </label>
        <label style = {{marginLeft: "60px"}}>
          <input
            type="radio"
            name="answer10"
            value="no"
            onClick={handleShowAdditionalQues}
            checked={answer10 === 'no'}
            onChange={(e) => setAnswer10(e.target.value)}
          />{' '}
          No 
        </label>
      

        {showOptions2 && (
          <div id="options2">
            <div style = {{marginBottom: "18px", marginTop: "20px"}} >
            {/*Question 1a - shown when user choses "yes" for question 1*/}
            <li>Are the desired physics packaged GPU-enabled?</li>
            </div>
            <label>
              <input
                type="radio"
                name="answer11"
                value="yes"
                checked={answer11 === 'yes'}
                onChange={(e) => setAnswer11(e.target.value)}
              />{' '}
              Yes 
            </label>
            <label style = {{marginLeft: "60px"}}>
              <input
                type="radio"
                name="answer11"
                value="no"
                checked={answer11 === 'no'}
                onChange={(e) => setAnswer11(e.target.value)}
              />{' '}
              No 
            </label>
          </div>
        )}
        <div style = {{marginBottom: "18px", marginTop: "20px"}}>
          {/*Question 2 */}
        <li>Is the code written in such a way that it is GPU-ready?</li>
        </div>
        <ol start = "a.">
          {/*Question 2a */}
          <div style = {{marginBottom: "18px", marginTop: "20px"}}>
          <li>Is full parallelism available at the loop level?</li>
          </div>
          
            <label>
              <input
                type="radio"
                name="answer12"
                value="yes"
                checked={answer12 === 'yes'}
                onChange={(e) => setAnswer12(e.target.value)}
              />{' '}
              Yes 
            </label>
            <label style = {{marginLeft: "60px"}}>
              <input
                type="radio"
                name="answer12"
                value="no"
                checked={answer12 === 'no'}
                onChange={(e) => setAnswer12(e.target.value)}
              />{' '}
              No 
            </label>
        
          <div style = {{marginBottom: "18px", marginTop: "20px"}}>
          {/*Question 2b */}
          <li>Does a threaded version of the code exist?</li>
          </div>
          
            <label>
              <input
                type="radio"
                name="answer13"
                value="yes"
                checked={answer13 === 'yes'}
                onChange={(e) => setAnswer13(e.target.value)}
              />{' '}
              Yes 
            </label>
            <label style = {{marginLeft: "60px"}}>
              <input
                type="radio"
                name="answer13"
                value="no"
                checked={answer13 === 'no'}
                onChange={(e) => setAnswer13(e.target.value)}
              />{' '}
              No 
            </label>
        
          <div style = {{marginBottom: "18px", marginTop: "20px"}}>
          {/*Question 2c */}
          <li>Does the code have some form of verification?</li>
          </div>
          
            <label>
              <input
                type="radio"
                name="answer14"
                value="yes"
                checked={answer14 === 'yes'}
                onChange={(e) => setAnswer14(e.target.value)}
              />{' '}
              Yes 
            </label>
            <label style = {{marginLeft: "60px"}}>
              <input
                type="radio"
                name="answer14"
                value="no"
                checked={answer14 === 'no'}
                onChange={(e) => setAnswer14(e.target.value)}
              />{' '}
              No 
            </label>
            <br />
      
        </ol>
       

      </ol>
      </CustomBox>
      {/*Submit Button*/}

      </div>
      
      <div style = {{marginLeft: "253.5px", marginBottom: "100px"}}>
      <Button text = "Back" onClick = {handleOnClick2}></Button>
      <Button text = "Clear" onClick = {handleClearOptions} style ={{ marginLeft : "10px" , marginRight:"10px"}}/>
      <Button text = "Next" onClick = {handleCalculatePoints}  />
      </div>
    </div>
  );


}

export default StudentExercise2;


