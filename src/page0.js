// Import required modules from 'react' and 'react-router-dom'
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import custom components
import ProgressBar from './ProgressBar';
import Hiking from './hiking';
import Page1 from './page1';
import StudentExercise0 from './StudentExercise0';
import Header from './header';
import HikingImage from './image/kidshiking.jpg';



// Page0 component
const Page0 = () => {
  const completed = 0; // Set the initial completed value here
  // const navigate = useNavigate(); 
  

  // Function to handle button click and navigate to page1
  // function handleClick(event) { navigate('/page1'); }

  return (
    <div className="container">
      <div className="background-image">
        {/*background image*/}
      <Hiking imageUrl={HikingImage} height = "600px" width = "750px"imagePosition={[100, -30]}creditPosition={{ bottom: 65, right: 55 }}/> {/* Render the Hiking component */}
      </div>
      <div className="content">
        {/* Header component */}
        <Header title="STUDENT EXERCISE 0" subtitle="5 MINUTES" />
        {/* Progress bar component */}
        <ProgressBar bgcolor="#36545d" completed={completed} />
        <Routes>
          {/* Route for StudentExercise0 */}
          <Route path="/*" element={<StudentExercise0 />} />
          {/* Route for Page1 */}
          <Route path="/page1" element={<Page1 />} />
        </Routes>
        {/* Next page button */}
        {/*<button type="button" onClick={handleClick} style={{ marginLeft: '40px' }}>
          Next Page
  </button>*/}
      </div>
    </div>
  );
};

export default Page0;
