// Importing necessary dependencies and components
import React, { useState, useEffect } from 'react';
import CustomTooltip from './ToolTip';
import Button from './Button';
import Summary from './summary';
import {useNavigate} from 'react-router-dom';
import CustomBox from './Box';
import Logic from './logic';

const StudentExercise1 = () => {
  // State variables
  const [answer2, setAnswer2] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [resultMessage2, setResultMessage2] = useState('');
  const [volume, setVolume] = useState('');
  const [frequency, setFrequency] = useState('');
  const [inputOne, setInputOne] = useState(localStorage.getItem('inputOne') || '');
  const [inputTwo, setInputTwo] = useState(localStorage.getItem('inputTwo') || '');
  const [divisionResult, setDivisionResult] = useState('');
  const [iofreq, setIOfreq] = useState("")
  const threshold = 50;
  const navigate = useNavigate();
 


 // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'volume') {
      setVolume(value);
      localStorage.setItem('IOVolume', value);
    } else if (name === 'frequency') {
      setFrequency(value);
      localStorage.setItem('IOFrequency', value);
    } else if (name === 'answer2') {
      setAnswer2(value);
      localStorage.setItem('RateThroughput', value);
    } else if (name === 'inputOne') {
      setInputOne(value);
      localStorage.setItem('InputOne', value);
    } else if (name === 'inputTwo') {
      setInputTwo(value);
      localStorage.setItem('InputTwo', value);

    }
  };





// Function to handle form submission
//This function outputs answers based on the user's  answers

  const handleSubmit = (e) => {
    


      if (inputOne && inputTwo && volume && frequency && answer2) {// this condition checks if the user has entered all the inputs before clicking submit
        setSubmitted(true);


        const x = parseFloat(inputOne); //converting string inputs to intergers
        const y = parseFloat(inputTwo);
        const w = parseFloat(volume)
        const z = parseFloat(frequency)

        if (!isNaN(x) && !isNaN(y) && !isNaN(w) && !isNaN(z)){
          const division = x / y; //calculating division result
          const iof = w / z; // calculating IOfreq by dividing volume with frequency 

        
          let result = "" //An empty string is initialized which is later used to output the result message.

          //Below string is shown when the division result is greater than 50, iofreq is less than 100 and throughput is chosen  
          const start1 = `Based on your input, it appears that your science objective is amenable to GPU-based computing. This assessment is based on several of your answers:`
          //Below string is shown when division result is greater than 50
          const True1 = `The number of grid points of ${divisionResult} per GPU or node is sufficient.Typically, a GPU based \n\t    computing solution requires in excessive of ${threshold} grid points per GPU`

          //Below string is shown when iofreq is less than 100
          const True2 = `GPU’s are designed for computationally heavy problems.\n You indicated that you \n\t\t    perform approximately ${volume} Mbytes of disk I/O every ${frequency} seconds. It sounds like a significant percentage of time for your application is spent performing computations. This is necessary but not sufficient condition for the efficient use of GPU-based computing.`


          //Below string is shown if either division result is less than 50 OR iofreq is greater than 100 OR rate is chosen
          const start2 = `Based on your input, it does not appear that your science objective is amenable to GPU-based computing.This assessment is based on several of your answers:`

          //Below string is shown if division result is less than 50
          const False1 = `The number of grid points per GPU or node is rather low ${divisionResult}. Typically, a GPU based \n\t    computing solution requires in excess of ${threshold} grid points per GPU. What can I do \n\t    about this?\n\t\ta. Is the size of your problem sufficient to address your science objective or is it a \n\t\t    limitation of your existing compute solution. If it is sufficient to address your \n\t\t    science objective, then there does not appear to be an advantage of GPU-\n\t\t    based solution versus a CPU-based solution. If it is not sufficient, then a GPU-\n\t\t    based solution may enable improvement of the fidelity of your simulations.`
          
            //Below string is shown if iofrq is greater than 100
          const False2 = `GPU’s are designed for computationally heavy problems. You indicated that \n\t    you perform approximately ${volume} Mbytes of disk I/O every ${frequency} seconds. \n\t    A significant percentage of time for your application will likely be spent moving data \n\t    from the GPU memory to the disk subsystem. What can I do about this? \n\t    Can you reduce the amount of I/O that your application performs`
          //Below string is shown if rate is chosen
          const False3 = `You indicated that your problem has a [[strong, moderate, weak} ${answer2} limitation. \n\t    While GPU-based computing can successfully be used for both rate and throughput \n\t    computing tasks, it frequently does better for throughput based computing.`


          let num = 0//This variables is used to create an ordered list for the output. 
          //num increments as the number of "No"s chosen by the user go up
        
          if ( division > 50 && iof < 100 && answer2 === "throughput"){ 
            //if division result is greater than 50, iofreq is less than 100 and throuhgput is chosen, "start1", "True1" and "True2" are concatenated
            result = start1 + "\n\t a. " + True1 + "\n\t b. "+ True2
          }
          else{
            //if division result is less than 50 OR iofreq is greater than 100 OR rate is chosen, then "start2" is set to the empty "result" string
            result = start2 
          }

          if (division < 50){
            //if division is less than 50, num is incremented and concatenated to the result string alog with "False1" 
            num +=1
            result += "\n\t"+ num + ". " + False1
          }

          if (iof > 100){
             //if iofreq is greater than 100, num is incremented and concatenated to 
             // the result string alog with "False2" 
             num +=1
             result += "\n\t"+ num + ". " + False2
          }

          if(answer2 === "rate"){
             // if rate is chosen, num is incremented and concatenated to the result 
             // string alog with "False3" 
             num +=1
             result += "\n\t"+ num + ". " + False3
          }


          setDivisionResult(division); //This statement assigns "division" variable to the "divisionResult" variable
          localStorage.setItem('divisionResult', division); //This line stores "division" in local storage so it can be retrieved and displayed in the summary page. 
          setIOfreq(iof);//This statement assigns "iof" variable to the "iofreq" variable
          localStorage.setItem('iofreq', iof);//This line stores "iof" in local storage so it can be retrieved and displayed in the summary page. 
          setResultMessage2 (result);//This statement assigns "result" variable to the "ResultMessage2" variable
          localStorage.setItem('resultMessage2', result); //This line stores "result" in local storage so it can be retrieved and displayed in the summary page. 
          navigate('/page2'); // This line of code is used to navigate to page 2
          
          const results = Logic();
          console.log("Results from Logic:", results);
        }

        
        
      } else{
        
        alert('Please answer all questions.');//This message is shown when the user does not answer all the questions
      }


      
    
    e.preventDefault();
  };


// Function to clear options and reset the form
  const clearOptions = (e) => {
    e.preventDefault();
    setAnswer2('');
    setDivisionResult("");
    setResultMessage2 ("");
    setInputOne("")
    setInputTwo("")
    setVolume("")
    setFrequency("")

    const results = Logic();
    console.log("Results from Logic:", results);

  };

  function handleOnClick2(event) {
    navigate('/page0'); // Function to navigate back to the home page
    const results = Logic();
    console.log("Results from Logic:", results);
  };

  useEffect(() => {
    const storedVolume = localStorage.getItem('IOVolume') || '';
    const storedFrequency = localStorage.getItem('IOFrequency') || '';
    const storedAnswer2 = localStorage.getItem('RateThroughput') || '';
    const storedInputOne = localStorage.getItem('InputOne') || '';
    const storedInputTwo = localStorage.getItem('InputTwo') || '';

    setVolume(storedVolume);
    setFrequency(storedFrequency);
    setAnswer2(storedAnswer2);
    setInputOne(storedInputOne);
    setInputTwo(storedInputTwo);

    // Call the Logic function to execute the code
    const results = Logic();
    console.log("Results from Logic:", results);
  }, []);
/*
  useEffect(() => {
    // Call the Logic function to execute the code
    const results = Logic();
    console.log("Results from Logic:", results);
  }, []);
*/


  return (
    <div style={{ alignment: "center" }}>
        <form onSubmit={handleSubmit}>
            <CustomBox width="500px" height="550px">
                <div>
                    <div>
                        <ol start="5">
                            {/* Question 1 - Independent grid points per run */}
                            <li>Determine the following:</li>
                            <label>Total number of independent grid-points: <br></br>
                              <input
                                type="text"
                                value={inputOne}
                                onChange={handleInputChange}
                                name="inputOne"/>
                                </label>
                            <br />
                            <br />
                           {/*Question 1 - input2*/}
                          <label>Number of &#123;node, GPU&#125;: per run: <br></br>
                            <input
                              type="text"
                              value={inputTwo}
                              name="inputTwo"
                              onChange= {handleInputChange}
                            /></label>
                        </ol>
                    </div>

                    <ol start="6">
                        {/* Question 2 - I/O Frequency */}
                        <li>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                What is the volume and frequency of I/O?
                                <CustomTooltip
                                    title="The volume and frequency of I/O refer to 
                                    the amount and rate of data being read from or written 
                                    to a storage device, affecting system performance and 
                                    responsiveness."
                                    placement="right"
                                />
                            </div>
                        </li>
                        {/* Question 2 input1 - volume */}
                        <label>
                            Volume in MBytes <br />
                            <input
                                type="text"
                                name="volume"
                                value={volume}
                                onChange={handleInputChange}
                            />
                            <br /><br />
                        </label>

                        <label>
                            {/* Question 2 input1 - frequency */}
                            Time between I/O in seconds <br />
                            <input
                                type="text"
                                name="frequency"
                                value={frequency}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br /><br />
                    </ol>

                    <ol start="7">
                        {/* Question 3 - rate or throughput */}
                        <li>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                Do you have rate or throughput limitations?
                                <CustomTooltip
                                    title="Rate and throughput both refer to 
                                    the speed at which data is transferred, with rate 
                                    focusing on individual data units, while throughput 
                                    represents the overall data transfer capacity."
                                    placement="right"
                                />
                            </div>
                        </li>
                        <br />
                        <div id="options2">
                            <label>
                                <input
                                    type="radio"
                                    name="answer2"
                                    value="rate"
                                    checked={answer2 === 'rate'}
                                    onChange={handleInputChange}
                                />{' '}
                                Rate
                            </label>
                            <label style={{ marginLeft: "60px" }}>
                                <input
                                    type="radio"
                                    name="answer2"
                                    value="throughput"
                                    checked={answer2 === 'throughput'}
                                    onChange={handleInputChange}
                                />{' '}
                                Throughput
                            </label>
                            <br />
                        </div>
                    </ol>
                </div>
                <br />
            </CustomBox>
            <div style={{ marginLeft: "253.5px", marginBottom: "100px" }}>
                <Button text=" Back " onClick={handleOnClick2} />
                <Button text="Clear" onClick={clearOptions} style={{ marginLeft: "10px", marginRight: "10px" }} />{/* Clear Button */}
                <Button text="Next" /> {/* Submit Button */}
            </div>
        </form>

        
        <br />
    </div>


);
};

export default StudentExercise1;