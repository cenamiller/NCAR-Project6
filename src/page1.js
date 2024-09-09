// Import required modules from 'react' and 'react-router-dom'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HikingImage from './image/vehicle.jpg';

// Import custom components
import ProgressBar from './ProgressBar';
import Hiking from './hiking';
import Header from './header';
import Page2 from './page2';
import StudentExercise1 from './StudentExercise1';

// Page 1 Component
const Page1 = () => {
  const completed = 0; // Set the initial completed value for the progress bar
  // const navigate = useNavigate();

  // Function to navigate to page2
  // function handleClick(event) { navigate('/page2');}



  return (
    <div className="container">
      <div className="background-image">
        {/*background image*/}
      <Hiking imageUrl={HikingImage} height = "630px" width = "750px"imagePosition={[100, -80]}creditPosition={{ bottom: 115, right: 10 }}/> {/* Render the Hiking component */}
      </div>
      <div className="content">
        <Header title="STUDENT EXERCISE 1" subtitle="5 MINUTES" /> {/* Render the Header component with title and subtitle */}
        <ProgressBar bgcolor="#36545d" completed={completed} /> {/* Render the ProgressBar component with specified background color and completion percentage */}
        
        {/* Define the routes for the nested components */}
        <Routes>
          <Route path="/*" element={<StudentExercise1 />} /> {/* Render the StudentExercise1 component */}
          <Route path="/page2" element={<Page2 />} /> {/* Render the Page2 component */}
        </Routes>

        {/* Button to navigate to the next page */}
      {/*<button type="button" onClick={handleClick} style={{ marginLeft: '40px' }}>
          Next Page
  </button>*/}
        
        {/* Button to navigate back to the home page */}
        
      </div>
    </div>
  );
};

export default Page1;
