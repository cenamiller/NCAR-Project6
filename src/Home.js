// Import required modules from 'react' and 'react-router-dom'
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import custom components

import Hiking from './hiking';
import Page0 from './page0';
import Header from './header';
import HomeContent from './HomeContent';
import HikingImage from './image/hiking.jpg';


// Page0 component
const HomePage = () => {
  // const navigate = useNavigate(); 

  // Function to handle button click and navigate to page1
  // function handleClick(event) { navigate('/page0'); }

  return (
    <div className="container">

      <div className="content">
        {/* Header component */}
        <Header title="Is your model ready for GPU acceleration?" subtitle="5 MINUTES" />
        <div className="background-image">
          <Hiking imageUrl={HikingImage} height="520px" width="825px" imagePosition={[45, -40]} creditPosition={{ bottom: 75, right: -60 }} />
        </div>
        <Routes>
          {/* Route for StudentExercise0 */}
          <Route path="/" element={<HomeContent/>} />
          {/* Route for Page1 */}
          <Route path="/page0" element={<Page0 />} />
        </Routes>
        {/* Next page button */}
        {/*<button type="button" onClick={handleClick} style={{ marginLeft: '40px' }}>
          Next Page
  </button>*/}
      </div>
    </div>
  );
};

export default HomePage;
