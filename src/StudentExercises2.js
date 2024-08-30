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
  const NumGP = localStorage.getItem("divisionResult")

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
    let newTotalPoints = 0; //variable to keep track of calculated points
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
      if (answer10 === 'yes') { 
        newTotalPoints += 0; //if first answer is yes, 0 points are added to newTotalPoints

        if (answer11 === 'yes') {
          newTotalPoints += 1; //if second answer is yes, 1 point is added to newTotalPoints
        } else if (answer11 === 'no') {
          newTotalPoints += 3; //if second answer is no, 3 points are added to newTotalPoints
        }
      } else if (answer10 === 'no') {
        newTotalPoints += 4;  //if first answer is no, 4 points are added to newTotalPoints
      }

      if (answer12 === 'yes') {  
        newTotalPoints += 1; //if third answer is yes, 1 point is added to newTotalPoints
      } else if (answer12 === 'no') {
        newTotalPoints += 7; //if third answer is no, 7 points are added to newTotalPoints
      }

      if (answer13 === 'yes') { 
        newTotalPoints += 1; //if fourth answer is yes, 1 point is added to newTotalPoints
      } else if (answer13 === 'no') {
        newTotalPoints += 7; //if fourth answer is no, 7 points are added to newTotalPoints
      }

      if (answer14 === 'yes') {
        newTotalPoints += 1; //if fifth answer is yes, 1 point is added to newTotalPoints
      } else if (answer14 === 'no') {
        newTotalPoints += 7; //if fifth answer is no, 7 points are added to newTotalPoints
      }


    setPointResult(newTotalPoints) //This statement assigns "newTotalPoints" variable to the "Total Points" variable
     //This line stores "newTotalPoints" in local storage so it can be retrieved and displayed in the summary page. 

    let result2 = "" //An empty string name "reslut2" is initialized which is later used to output the result message.
    let num = 0 //This variables is used to create an ordered list for the output. 
    //num increments as the number of "No"s chosen by the user go up
    const start = "Let’s now discuss the difficulty of achieving the ROI."  //this string is added at the start of "result2" string

    result2 += start // "start"  string is concatenated at the beginning of the "result2" string

    //Below string is concatenated to "result2" string if "newTotalPoints" is greater less than 25
    const string1 = " Based on your answers, it appears that your code is ready to start the process of GPU-enablement. Let us try and figure out how much work it might take."

    //Below string is concatenated to the "result2" string if the user answers "yes" to question 1
    const ques1yes = "It is great news that a version of your application has already been GPU-enabled. \n\t    This considerably reduces the difficulty." 
    
    //Below string is concatenated to the "result2" string if the user answers "no" to question 1
    const ques1no = "It looks like your science objective is not currently GPU-enabled. \n\t    Based on your answers we can estimate effort to achieve GPU-enablement."

    //Below string is concatenated to the "result2" string if the user answers "yes" to question 2
    const ques2yes = "Also great news that the necessary physics packages are supported on GPU. It \n\t    sounds like you just need to learn how to submit jobs to a GPU-based platform"

    //Below string is concatenated to the "result2" string if the user answers "no" to question 2
    const ques2no = "Unfortunately  not all of the code necessary for your science objective is GPU-enabled. \n\t    The amount of work necessary to GPU-enable your science objective"

    //Below string is concatenated to the "result2" string if the user answers "yes" to question 3
    const ques3yes = `It appears that the number of grid points per GPU or node [${NumGP}] is approximately \n\t    equal to the number of iterations in loop bodies [${product}]. This greatly simplifies \n\t    GPU-enablement because all the parallelism is exposed in one place. \n\t    Congratulations, it appears that your code is GPU-ready.\n\t\t i. The next step is to decide on the programming approach to achieve GPU-\n\t\t    enablement. Several programming options are available including: \n\t\t\ta. Language based approaches using C++ productivity frameworks \n\t\t\tb. Writing in an explicitly GPU based language like CUDA, CUDA Fortran\n\t\t\t     or HIP\n\t\t\tc. Directive based approaches \n\t\tii.The choice of programming language approach is based on your goals\n\t\t\ta. Do you want to maintain portability across multiple compute platforms → \n\t\t\t    productivity framework or directive based approach \n\t\t\tb. Not concerned about portability → consider explicitly GPU based \n\t\t\t    languages \n`
    //Below string is concatenated to the "result2" string if the user answers "yes" to question 3
    const ques3no = `Because the total number of grid points per GPU or node [${NumGP}] is significantly larger \n\t    than the number of iterations [${product}] this looks like some code transformation is \n\t    necessary. Unfortunately this is quite common and can take a significant amount of \n\t    effort to adequately expose the parallelism necessary`


    if (newTotalPoints < 25){
      result2 += string1 //if newTotalPoints is less than 25, string is concatentaed at the beginning of the "result2" string
    }

    if(answer10 === "yes"){
      //if first answer is "yes", num is incrementated and concatenated to the "result2" string along with "ques1yes" string
      num += 1
      result2 += "\n\t"+ num + ". " + ques1yes
    }else{
       //if first answer is "no", num is incrementated and concatenated to the "result2" string along with "ques1no" string
      num += 1
      result2 += "\n\t"+ num + ". " + ques1no
    }

    if(answer11 === "yes"){
       //if second answer is "yes" num is incrementated and concatenated to the "result2" string along with "ques2yes" string
      num += 1
      result2 += "\n\t"+ num + ". " + ques2yes
    }else{
       //if second answer is "no" num is incrementated and concatenated to the "result2" string along with "ques2no" string
      num += 1
      result2 += "\n\t"+ num + ". " + ques2no
    }

    if(answer12 === "yes"){
       //if third answer is "yes" num is incrementated and concatenated to the "result2" string along with "ques3yes" string
      num += 1
      result2 += "\n\t"+ num + ". " + ques3yes
    }else{
       //if third answer is "no" num is incrementated and concatenated to the "result2" string along with "ques3no" string
      num += 1
      result2 += "\n\t"+ num + ". " +  ques3no
    }

    setResultMessage3 (result2);//This statement assigns "result2" variable to the "ResultMessage3" variable
    localStorage.setItem('resultMessage3', result2); //This line stores "result2" variable in local storage so it can be retrieved and displayed in the summary page. 
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


