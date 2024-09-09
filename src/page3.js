// Import required modules from 'react' and 'react-router-dom'
import React from 'react';
import ProgressBar from './ProgressBar';
import Hiking from './hiking';
import StudentExercise3 from './StudentExercises3';

// import Button from './Button';
import Header from './header';
import HikingImage from './image/Fire.jpg';

//Page 3 Component
const Page3 = () => {
  const completed = 0; // Progress percentage

  // React Router hook for navigation
  // const navigate = useNavigate();



  // Navigate to the home page when the button is clicked
  // function handleOnClick2(event) { navigate('/');}

  return (
    <div className="container">
      <div className="background-image">
        {/*background image*/}
      <Hiking imageUrl={HikingImage} height = "600px" width = "650px"imagePosition={[70, -45]}creditPosition={{ bottom: 70, right: 90 }}/> {/* Render the Hiking component */}
      </div>
      <div className="content">
        <Header title="STUDENT EXERCISE 3" subtitle="5 MINUTES" /> {/* Render the Header component with title and subtitle */}
        <ProgressBar bgcolor="#36545d" completed={completed} /> {/* Render the ProgressBar component with background color and progress percentage */}
        <StudentExercise3 /> {/* Render the StudentExercise3 component */}
        <br></br>
        <box>
        {/* Alternative implementation using custom Button component */}
        
        
        </box>
      </div>
    </div>
  );
};

export default Page3;
