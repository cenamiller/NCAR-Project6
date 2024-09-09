// Import required modules from 'react' and 'react-router-dom'
import React from 'react';
// Import custom components
import ProgressBar from './ProgressBar';
import {useNavigate} from 'react-router-dom';
import Button from './Button';
import Summary from './summary';
import Header from './header';
import CustomContainer from './Container';

// Page 4  Component
const Page4 = (props) => {
    const completed = 0; // Variable to track progress completion
    const navigate = useNavigate(); // Hook to access navigation functionality

    // Function to handle button click event
    function handleOnClick2(event) {
        navigate('/'); // Navigate to the home page
    }

    // JSX code for rendering the component
    return (
        <div className="container">
           
            <div className="content" >
                
                <Header title="Summary Page" subtitle="These are your results" />
                <ProgressBar bgcolor="#36545d" completed={completed} /> {/* Progress bar component */}
                <CustomContainer> <Summary /> {/* Summary component */} </CustomContainer>
                
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button
                    text="Home"
                    onClick={handleOnClick2}
                    style={{ padding: "10px 28px", marginTop: "20px", marginBottom: "100px", alignItems: 'center'}}
                /> {/* Button component for navigating to the home page */}
               
                </div>
            </div>
        </div>
    );
};

export default Page4; // Export the Page4 component
