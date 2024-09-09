// Import required modules from 'react' and 'react-router-dom'
import React from 'react';
// Import custom components
import ProgressBar from './ProgressBar'; 
import Hiking from './hiking'; 
import StudentExercise2 from './StudentExercises2'; 
import Page3 from './page3'; 
import Header from './header';
import HikingImage from './image/climbing.jpg'; 
import {Route, Routes} from 'react-router-dom'; // Importing required components from react-router-dom

//Page 2 Component
const Page2 = () => {
  const completed = 0; // Set the initial completed value here
  // Using the useNavigate hook from react-router-dom
  // const navigate = useNavigate(); 

  // Navigate to '/page3' when the button is clicked
  // function handleOnClick(event) { navigate('/page3');}


  return (
    <div className="container">
      <div className="background-image">
        {/*background image*/}
      <Hiking imageUrl={HikingImage} height = "600px" width = "650px" imagePosition={[70, -40]}creditPosition={{ bottom: 75, right: 90 }}/> {/*Render the Hiking component*/}
      </div>
      <div className="content">
        <Header title="STUDENT EXERCISE 2" subtitle="13 MINUTES" /> {/*Render the Header component with title and subtitle*/}
        <ProgressBar bgcolor="#36545d" completed={completed} /> {/*Render the ProgressBar component with bgcolor and completed prop */}

        <Routes>
          <Route path="/*" element={<StudentExercise2 />} /> {/*Render the StudentExercise2 component for all paths*/}
          <Route path="/page3" element={<Page3 />} /> {/*Render the Page3 component for '/page3' path*/}
        </Routes>

        <div >
          
          {/*<button type="button" onClick={handleOnClick} style={{ marginLeft: '40px', marginTop: "25px" }}>
            Next Page
          </button> {/* Render a regular button with onClick event handler */}
        </div> 
      </div>
    </div>
  );
};

export default Page2;
