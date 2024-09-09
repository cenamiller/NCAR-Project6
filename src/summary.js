// Importing react and necessary dependencies 
import React from 'react';
import HikingImage from './image/goal.jpg';
import CustomBox from './Box';
import IndentedList from './IndentedList';
//import { data } from './data';

const Summary = () => {
  // Retrieving data from local storage
  // const resultMessage  = localStorage.getItem("resultMessage");
  const resultMessage1 = localStorage.getItem("resultMessage1");
  const resultMessage2 = localStorage.getItem("resultMessage2");
  const resultMessage3 = localStorage.getItem("resultMessage3");
  const resultMessage4 = localStorage.getItem("resultMessage4");
  // const listMessage    = localStorage.getItem("listMessage");


  // Are you ready to start GPU-enablement?  

  let todo = [];
  const make = localStorage.getItem("make");
  const flex = localStorage.getItem("flex");
  const rcs = localStorage.getItem("rcs");
  const B4Bverify = localStorage.getItem("verify");

  // Q1: Does the code have a Makefile?
  if(make === "no"){todo.push({text:"Create a Makefile",children:[]}) }

  // Q2:  Is the code easy to execute by others?
  if(flex === "no"){ todo.push({text:"Add the ability to flexibly execute the code by other users",children:[]})}

  // Q3:  Is the code in a revision control system like Git
  if(rcs === "no"){todo.push({text:"Add your code into a revision control system like Git",children:[]})}

  // Q4:  Is their a verification framework?
  if(B4Bverify === "no"){todo.push({text:"Develop a verification framework that allows the identification of non-bit-for-bit answer changes from software bugs",children:[]})}

  let ready = "";
  if (make === "yes" && flex === "yes" && rcs === "yes" && B4Bverify === "yes"){
      //When user choses all "Yes"s, this string is displayed
      ready = 'That is great news! It sounds like you have all the necessary software engineering pieces in place to start thinking about GPU-enablement.'
  } else {
      // Looks like some preliminary work is still necessary
      ready = 'Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement. In particular the following steps should be done first:';
  }

  return (
    <div style={{ alignment: "center", paddingLeft: "35px", paddingRight: "60px", marginLeft: "40px", whiteSpace: 'pre-wrap' }}>
      {/* Displaying the results from different pages */}
      <div style={{ textAlign: "center" }}>
        {/*image*/}
        <img src={HikingImage} style={{ width: "500px", height: "500px", borderRadius: "50%", marginTop: "30px", marginBottom: "80px", border: "20px solid #fff" }} />
      </div>

      {/*Result from Page 0*/}
      <div style={{ marginBottom: "40px" }}>
        <CustomBox bgcolor="white" color="black" padding="22px" font="22px" style={{ margin: 'auto' }}>
            <h1 style={{fontSize: '22px',margin: '0', padding: '0'}}>{ready}</h1>
            <IndentedList items={todo} />  
        </CustomBox>
      </div>

      {/*Result from Page 1*/}
      <div style={{ marginBottom: "40px" }}>
        <CustomBox bgcolor="white" color="black" padding="50px" font="22px" style={{ margin: 'auto' }}>
          {resultMessage1 && <p>{resultMessage1}</p>}
        </CustomBox>
      </div>


      {/*Result from Page 2*/}
      <div style={{ marginBottom: "40px" }}>
        <CustomBox bgcolor="white" color="black" padding="50px" font="22px" style={{ margin: 'auto' }}>
          {resultMessage2 && <p>{resultMessage2}</p>}
        </CustomBox>
      </div>
      {/*Result from Page 2*/}
      <div style={{ marginBottom: "40px" }}>
      <CustomBox bgcolor="white" color="black" padding="50px" font="22px" style={{ margin: 'auto' }}>
        {resultMessage3 && <p>{resultMessage3}</p>}
      </CustomBox>
      </div>
      {/*Result from Page 3*/}
      <div style={{ marginBottom: "60px" }}>
      <CustomBox bgcolor="white" color="black" padding="50px" font="22px" style={{ margin: 'auto' }}>
        {resultMessage4 && <p>{resultMessage4}</p>}
      </CustomBox>
      </div>
    </div>
  );
};

export default Summary;
