import React from 'react';



const listLocalStorageVariables = () => {
    console.log("Listing all variables in localStorage:");
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log(`${key}: ${value}`);
    }
};

const Logic = () => {


     // enable this function to a see a potentially confsuing list of all variables in localStorage
    //listLocalStorageVariables();
    // Collect answers 1-4 
    
    // 1. do  you have a Makefile created for your code?
    // 2. Do you have the ability to flexibly execute your code by other users?
    // 3. Is your code in a revision control system like Git?
    // 4. Do you have a way to determine non-bit-for-bit answer changes from software bugs?

    const make = localStorage.getItem("make");
    const flex = localStorage.getItem("flex");
    const rcs = localStorage.getItem("rcs");
    const verify = localStorage.getItem("verify");

    //5a. Total number of independent grid-points
    //5b. Number of nodes or GPUs per run
    //6a. What is Volume of I/O in MB
    //7b. What is time between I/O in seconds
    //8. Do you have rate or throughput limitations

    const InputOne = localStorage.getItem("InputOne");
    const InputTwo = localStorage.getItem("InputTwo");
    const IOVolume = localStorage.getItem("IOVolume");
    const IOFrequency = localStorage.getItem("IOFrequency");
    const RateThroughput = localStorage.getItem("RateThroughput");

    // 9. Does a GPU version of your code already exist?
    // 10. Are the desired physics packaged GPU-enabled?
    // Is the code written in such a way that it is GPU-ready?
    // 11a. Is full parallelism available at the loop level?
    // 11b. Does a threaded version of the code exist?
    // 11c. Does the code have some form of verification?

    const GPUVersion = localStorage.getItem("answer10");
    const physics = localStorage.getItem("answer11");
    const parallelLoops = localStorage.getItem("answer12");
    const threaded = localStorage.getItem("answer13");
    const verification = localStorage.getItem("answer14");

    //12. How many levels of nesting are there?
    //13. Please enter a number or numbers (size of the loop bodies)?
    //14. How many variables are typically found in a lopbody expression?
    //15. Are you using 4 byte or 8 byte floating point values?


    const nestingLevels = localStorage.getItem("selectedNumber");
    const loopBodySize = localStorage.getItem("product");
    const numVariables = localStorage.getItem("numVar");
    const wordSize = localStorage.getItem("wordSize");





    const resultMessage = localStorage.getItem("resultMessage");
    const resultMessage2 = localStorage.getItem("resultMessage2");
    const resultMessage3 = localStorage.getItem("resultMessage3");
    const resultMessage4 = localStorage.getItem("resultMessage4");

    const combinedResults = {
        make,
        flex,
        rcs,
        verify,
        InputOne,
        InputTwo,
        IOVolume,
        IOFrequency,
        RateThroughput,
        GPUVersion,
        physics,
        parallelLoops,
        threaded,
        verification,
        nestingLevels,
        loopBodySize,
        numVariables,
        wordSize
    };

    console.log("Combined Results:", combinedResults);
    console.log("Make:", make);
    console.log("Flex:", flex);
    console.log("RCS:", rcs);
    console.log("Verify bit-for-bit:", verify);
    console.log("Grid Points:", InputOne);
    console.log("Nodes:", InputTwo);
    console.log("IO Volume:", IOVolume);
    console.log("IO Frequency:", IOFrequency);
    console.log("Rate Throughput:", RateThroughput);
    console.log("GPU Version:", GPUVersion);
    console.log("Physics:", physics);
    console.log("Parallel Loops:", parallelLoops);
    console.log("Threaded:", threaded);
    console.log("Verification:", verification);
    console.log("Nesting Levels:", nestingLevels);
    console.log("Loop Body Size:", loopBodySize);
    console.log("Number of Variables:", numVariables);
    console.log("Word Size:", wordSize);



    return combinedResults;

};

export default Logic