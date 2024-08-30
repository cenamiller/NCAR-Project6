//import React, { useState, useEffect} from 'react';
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
    const B4Bverify = localStorage.getItem("verify");

    //5a. Total number of independent grid-points
    //5b. Number of nodes or GPUs per run
    //6a. What is Volume of I/O in MB
    //7b. What is time between I/O in seconds
    //8. Do you have rate or throughput limitations

    const gridPoints = parseFloat(localStorage.getItem("InputOne"));
    const numNodes = parseFloat(localStorage.getItem("InputTwo"));
    const IOVolume = parseFloat(localStorage.getItem("IOVolume"));
    const IOFrequency = parseFloat(localStorage.getItem("IOFrequency"));
    const RateThroughput = localStorage.getItem("RateThroughput");
    const threshold = 50;

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


    //const [resultMessage, setResultMessage] = useState('');
    //const resultMessage = localStorage.getItem("resultMessage");
    //const resultMessage2 = localStorage.getItem("resultMessage2");
    const resultMessage3 = localStorage.getItem("resultMessage3");
    const resultMessage4 = localStorage.getItem("resultMessage4");

    const combinedResults = {
        make,
        flex,
        rcs,
        B4Bverify,
        gridPoints,
        numNodes,
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
    console.log("Verify bit-for-bit:", B4Bverify);
    console.log("Grid Points:", gridPoints);
    console.log("Nodes:", numNodes);
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


 // CENA: This was the logic moved from Student Exercise 0

    //This string is shown if user chooses one or more "No"s 
    const start = 'Based on your answers, it appears that there is still some work that needs to be done before you can start the process of GPU-enablement. \xa0 In particular the following steps should be done first:';

    //This string is displayed if the user chooses No for Question 1
    const string1 = 'Create a Makefile'; 

    //This string is displayed if the user chooses No for Question 2
    const string2 = 'Add the ability to flexibly execute the code by other users'; 

    //This string is displayed if the user chooses No for Question 3
    const string3 = 'Add your code  into revision control system like Git'; 

    //This string is displayed if the user chooses No for Question 4
    const string4 = 'Develop a verification framework that allows the identification of non-bit-for-bit \n\t answer changes from software bugs'; 

    //This variables is used to create an ordered list for the output. 
    //num increments as the number of "No"s chosen by the user go 
    let num = 0 
    

    //An empty string is initialized which is later used to output the result message.
    let result = "" ; 


    if (make === "yes" && flex === "yes" && rcs === "yes" && B4Bverify === "yes"){ 
      //When user choses all "Yes"s, this string is displayed
      result = 'Your application is a good match for GPU enabled computing! :)' 
    } else {
      //If the user choose one or more "No"s, the "start" string is set to the 
      // empty "result" string
      result = start 
    }

    // Construt the result string based on user i nput 
    if(make === "no"){
      num += 1 
      // If the first answer is no, then string1  is concatenated to the "result" string
      result += '\n\t' + num + ". " + string1 
    }

    if(flex === "no"){
      // Since the answer is no, num is incremented and concatenated to the second string
      num += 1 
      // If the second answer is no, then string2 is concatenated to the "result" string
      result += "\n\t"+ num + ". " + string2 
    }
    if(rcs === "no"){
      num += 1
      // If the third answer is no, then string3 is concatenated to the "result" string
      result += "\n\t"+ num + ". " + string3 
    }

    if(B4Bverify === "no"){
      num += 1 
      // If the second answer is no, then string4 is concatenated to the "result" string
      result += "\n\t"+ num + ". " + string4
      
    }



    // This line stores result in local storage so it can be retrieved and displayed 
    // in the summary page. 
    localStorage.setItem('resultMessage', result); 
    console.log("ResultMessage:", result);


     // CENA: This was the logic moved from Student Exercise 1

    
    if (!isNaN(gridPoints) && !isNaN(numNodes) && !isNaN(IOVolume) && !isNaN(IOFrequency)){
        const division = gridPoints / numNodes; //calculating division result
        const iof = IOVolume / IOFrequency; // calculating IOfreq by dividing volume with frequency 

      
        let result1 = "" //An empty string is initialized which is later used to output the result message.

        //Below string is shown when the division result is greater than 50, iofreq is less than 100 and throughput is chosen  
        const start1 = `Based on your input, it appears that your science objective is amenable to GPU-based computing. This assessment is based on several of your answers:`
        //Below string is shown when division result is greater than 50
        const True1 = `The number of grid points of ${division} per GPU or node is sufficient.Typically, a GPU based \n\t    computing solution requires in excessive of ${threshold} grid points per GPU`

        //Below string is shown when iofreq is less than 100
        const True2 = `GPU’s are designed for computationally heavy problems.\n You indicated that you \n\t\t    perform approximately ${IOVolume} Mbytes of disk I/O every ${IOFrequency} seconds. It sounds like a significant percentage of time for your application is spent performing computations. This is necessary but not sufficient condition for the efficient use of GPU-based computing.`


        //Below string is shown if either division result is less than 50 OR iofreq is greater than 100 OR rate is chosen
        const start2 = `Based on your input, it does not appear that your science objective is amenable to GPU-based computing.This assessment is based on several of your answers:`

        //Below string is shown if division result is less than 50
        const False1 = `The number of grid points per GPU or node is rather low ${division}. Typically, a GPU based \n\t    computing solution requires in excess of ${threshold} grid points per GPU. What can I do \n\t    about this?\n\t\ta. Is the size of your problem sufficient to address your science objective or is it a \n\t\t    limitation of your existing compute solution. If it is sufficient to address your \n\t\t    science objective, then there does not appear to be an advantage of GPU-\n\t\t    based solution versus a CPU-based solution. If it is not sufficient, then a GPU-\n\t\t    based solution may enable improvement of the fidelity of your simulations.`
        
          //Below string is shown if iofrq is greater than 100
        const False2 = `GPU’s are designed for computationally heavy problems. You indicated that \n\t    you perform approximately ${IOVolume} Mbytes of disk I/O every ${IOFrequency} seconds. \n\t    A significant percentage of time for your application will likely be spent moving data \n\t    from the GPU memory to the disk subsystem. What can I do about this? \n\t    Can you reduce the amount of I/O that your application performs`
        //Below string is shown if rate is chosen
        const False3 = `You indicated that your problem has a [[strong, moderate, weak} ${RateThroughput} limitation. \n\t    While GPU-based computing can successfully be used for both rate and throughput \n\t    computing tasks, it frequently does better for throughput based computing.`


        //let num = 0//This variables is used to create an ordered list for the output. 
        //num increments as the number of "No"s chosen by the user go up
      
        if ( division > 50 && iof < 100 && RateThroughput === "throughput"){ 
          //if division result is greater than 50, iofreq is less than 100 and throuhgput is chosen, "start1", "True1" and "True2" are concatenated
          result = start1 + "\n\t a. " + True1 + "\n\t b. "+ True2
        }
        else{
          //if division result is less than 50 OR iofreq is greater than 100 OR rate is chosen, then "start2" is set to the empty "result" string
          result1 = start2 
        }

        if (division < 50){
          //if division is less than 50, num is incremented and concatenated to the result string alog with "False1" 
          num +=1
          result1 += "\n\t"+ num + ". " + False1
        }

        if (iof > 100){
           //if iofreq is greater than 100, num is incremented and concatenated to 
           // the result string alog with "False2" 
           num +=1
           result1 += "\n\t"+ num + ". " + False2
        }

        if(RateThroughput === "rate"){
           // if rate is chosen, num is incremented and concatenated to the result 
           // string alog with "False3" 
           num +=1
           result1 += "\n\t"+ num + ". " + False3
        }


        //setDivisionResult(division); //This statement assigns "division" variable to the "divisionResult" variable
        localStorage.setItem('divisionResult', division); //This line stores "division" in local storage so it can be retrieved and displayed in the summary page. 
        //setIOfreq(iof);//This statement assigns "iof" variable to the "iofreq" variable
        localStorage.setItem('iofreq', iof);//This line stores "iof" in local storage so it can be retrieved and displayed in the summary page. 
        //setResultMessage2 (result);//This statement assigns "result" variable to the "ResultMessage2" variable
        localStorage.setItem('resultMessage1', result1); //This line stores "result" in local storage so it can be retrieved and displayed in the summary page.
        console.log("ResultMessage1:", result1);
    }

    // CENA: This was the logic moved from Student Exercise 2
        let newTotalPoints = 0; //variable to keep track of calculated points from Student Exercise 2
    if (GPUVersion === 'yes') { 
        newTotalPoints += 0; //if first answer is yes, 0 points are added to newTotalPoints

        if (physics === 'yes') {
          newTotalPoints += 1; //if second answer is yes, 1 point is added to newTotalPoints
        } else if (physics === 'no') {
          newTotalPoints += 3; //if second answer is no, 3 points are added to newTotalPoints
        }
      } else if (GPUVersion === 'no') {
        newTotalPoints += 4;  //if first answer is no, 4 points are added to newTotalPoints
      }

      if (parallelLoops === 'yes') {  
        newTotalPoints += 1; //if third answer is yes, 1 point is added to newTotalPoints
      } else if (parallelLoops === 'no') {
        newTotalPoints += 7; //if third answer is no, 7 points are added to newTotalPoints
      }

      if (threaded === 'yes') { 
        newTotalPoints += 1; //if fourth answer is yes, 1 point is added to newTotalPoints
      } else if (threaded === 'no') {
        newTotalPoints += 7; //if fourth answer is no, 7 points are added to newTotalPoints
      }

      if (verification === 'yes') {
        newTotalPoints += 1; //if fifth answer is yes, 1 point is added to newTotalPoints
      } else if (verification === 'no') {
        newTotalPoints += 7; //if fifth answer is no, 7 points are added to newTotalPoints
      }


    //setPointResult(newTotalPoints) //This statement assigns "newTotalPoints" variable to the "Total Points" variable
     //This line stores "newTotalPoints" in local storage so it can be retrieved and displayed in the summary page. 

    let result2 = "" //An empty string name "reslut2" is initialized which is later used to output the result message.
    let num2 = 0 //This variables is used to create an ordered list for the output. 
    //num increments as the number of "No"s chosen by the user go up
    const start2 = "Let’s now discuss the difficulty of achieving the ROI."  //this string is added at the start of "result2" string

    result2 += start2 // "start"  string is concatenated at the beginning of the "result2" string

    //Below string is concatenated to "result2" string if "newTotalPoints" is greater less than 25
    const string6 = " Based on your answers, it appears that your code is ready to start the process of GPU-enablement. Let us try and figure out how much work it might take."

    //Below string is concatenated to the "result2" string if the user answers "yes" to question 1
    const ques1yes = "It is great news that a version of your application has already been GPU-enabled. \n\t    This considerably reduces the difficulty." 
    
    //Below string is concatenated to the "result2" string if the user answers "no" to question 1
    const ques1no = "It looks like your science objective is not currently GPU-enabled. \n\t    Based on your answers we can estimate effort to achieve GPU-enablement."

    //Below string is concatenated to the "result2" string if the user answers "yes" to question 2
    const ques2yes = "Also great news that the necessary physics packages are supported on GPU. It \n\t    sounds like you just need to learn how to submit jobs to a GPU-based platform"

    //Below string is concatenated to the "result2" string if the user answers "no" to question 2
    const ques2no = "Unfortunately  not all of the code necessary for your science objective is GPU-enabled. \n\t    The amount of work necessary to GPU-enable your science objective"
    const divisionResult = localStorage.getItem("divisionResult");
    //Below string is concatenated to the "result2" string if the user answers "yes" to question 3
    const ques3yes = `It appears that the number of grid points per GPU or node [${divisionResult}] is approximately \n\t    equal to the number of iterations in loop bodies [${loopBodySize}]. This greatly simplifies \n\t    GPU-enablement because all the parallelism is exposed in one place. \n\t    Congratulations, it appears that your code is GPU-ready.\n\t\t i. The next step is to decide on the programming approach to achieve GPU-\n\t\t    enablement. Several programming options are available including: \n\t\t\ta. Language based approaches using C++ productivity frameworks \n\t\t\tb. Writing in an explicitly GPU based language like CUDA, CUDA Fortran\n\t\t\t     or HIP\n\t\t\tc. Directive based approaches \n\t\tii.The choice of programming language approach is based on your goals\n\t\t\ta. Do you want to maintain portability across multiple compute platforms → \n\t\t\t    productivity framework or directive based approach \n\t\t\tb. Not concerned about portability → consider explicitly GPU based \n\t\t\t    languages \n`
    //Below string is concatenated to the "result2" string if the user answers "yes" to question 3
    const ques3no = `Because the total number of grid points per GPU or node [${divisionResult}] is significantly larger \n\t    than the number of iterations [${loopBodySize}] this looks like some code transformation is \n\t    necessary. Unfortunately this is quite common and can take a significant amount of \n\t    effort to adequately expose the parallelism necessary`


    if (newTotalPoints < 25){
      result2 += string6 //if newTotalPoints is less than 25, string is concatentaed at the beginning of the "result2" string
    }

    if(GPUVersion === "yes"){
      //if first answer is "yes", num is incrementated and concatenated to the "result2" string along with "ques1yes" string
      num2 += 1
      result2 += "\n\t"+ num2 + ". " + ques1yes
    }else{
       //if first answer is "no", num is incrementated and concatenated to the "result2" string along with "ques1no" string
      num2 += 1
      result2 += "\n\t"+ num2 + ". " + ques1no
    }

    if(physics === "yes"){
       //if second answer is "yes" num is incrementated and concatenated to the "result2" string along with "ques2yes" string
      num2 += 1
      result2 += "\n\t"+ num2 + ". " + ques2yes
    }else{
       //if second answer is "no" num is incrementated and concatenated to the "result2" string along with "ques2no" string
      num2 += 1
      result2 += "\n\t"+ num2 + ". " + ques2no
    }

    if(parallelLoops === "yes"){
       //if third answer is "yes" num is incrementated and concatenated to the "result2" string along with "ques3yes" string
      num2 += 1
      result2 += "\n\t"+ num2 + ". " + ques3yes
    }else{
       //if third answer is "no" num is incrementated and concatenated to the "result2" string along with "ques3no" string
      num2 += 1
      result2 += "\n\t"+ num2 + ". " +  ques3no
    }

    //setResultMessage3 (result2);//This statement assigns "result2" variable to the "ResultMessage3" variable
    localStorage.setItem('resultMessage3', result2); //This line stores "result2" variable in local storage so it can be retrieved and displayed in the summary page. 
    console.log("ResultMessage2:", result2);



    // CENA: This was the logic moved from Student Exercise 3

    
        //working set size (wss) is calculated by multiplying "product", "numVar" and "wordSize"
        let wss = loopBodySize * parseInt(numVariables) * parseInt(wordSize)


        let result3 = "" //An empty string named "result" is initialized which is later used to output the result message.

        //string1 and string2 are concatenated at the start of the "result" string
        const string7 = "Next let us discuss both the return on the investment (ROI) converting your computational infrastructure to GPU-based computing and the difficulty with achieving this ROI."
        const string8 = `\t1. Let's first talk about Return on Investment.  You indicated that the extent of loop \n\t    bodies is approximately ${loopBodySize}. You also indicated that a common loop body contains \n\t    ${numVariables}, ${wordSize} bytes variables. This suggests that inner loops access ${wss} bytes of variables.`

        //wws1 is concatenated the to "result" string if the value of "wss" is greater than 75
        const wss1 = `a. Because  ${wss} wss is significantly larger than the typical last level cache size. \n\t\t    Your problem should achieve a ROI of approximately 3 to 4 due to the \n\t\t    differences in main memory bandwidth between CPU and GPU. Would a \n\t\t    reduction in the time to perform your science of 3 to 4 have a significant \n\t\t    impact on your ability to perform your science?`

        //wws1 is concatenated the to "result" string if the value of "wss" is less than 75
        const wss2 = `a. Because ${wss} wss is significantly smaller than the typical last level cache size. \n\t\t    Your code is likely already running pretty efficiently on a CPU-based platform. \n\t\t    GPU-enablement will yield a very modest ROI. `

        result3 = string7 + "\n" + string8 //string1 and string2 are concatentaed the "result" string

        if (wss > 75){
        // if "wss" is greater than 75, "wss1" is concatenated to the "result" string
          result3 += "\n\t\t" + wss1

        } else {

        // if "wss" is less than 75, "wss2" is concatenated to the "result" string

          result3 += "\n\t\t" + wss2

        }

        localStorage.setItem('resultMessage4', result3); //This line stores "result2" variable in local storage so it can be retrieved and displayed in the summary page. 
        console.log("ResultMessage3:", result3);


    return combinedResults;

};

export default Logic