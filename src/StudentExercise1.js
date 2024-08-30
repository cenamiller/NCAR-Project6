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
          navigate('/page2'); // This line of code is used to navigate to page 2
          
          const results = Logic();
          console.log("Results from Logic:", results);
        

        
        
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