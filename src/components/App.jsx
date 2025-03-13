
import Notification from './Notification';
import './App.css'
import Description from './Description'
import Feedback from './Feedback'
import Options from './Options'
import { useState, useEffect } from "react";




function App() {

   const [values, setValues] = useState(() => {
    const savedIndex = localStorage.getItem("index-reader");

    
    try {
      return savedIndex ? JSON.parse(savedIndex) : { good: 0, neutral: 0, bad: 0 };
    } catch (error) {
      console.error("Помилка парсингу JSON з localStorage:", error);
      return { good: 0, neutral: 0, bad: 0 };
    }
  });

  const updateFeedback = (type) => {
    setValues((prevValues) => ({
      ...prevValues,
      [type]: prevValues[type] + 1,
    }));
  };
useEffect(() => {

  
localStorage.setItem(`index-reader`, JSON.stringify(values))
}, [values])

    const totalFeedback = values.good + values.neutral + values.bad


    const reset = () => {
      if (totalFeedback > 0) {
        setValues({ good: 0, neutral: 0, bad: 0 }); 
       
      console.log("reset");
      }
    };
  return (
    <>


<Description/>
     


   <Options
   updateGood={updateFeedback}
   
   reset={reset}
   total={totalFeedback}
   /> 
  {totalFeedback === 0 && <Notification/>}
    

{totalFeedback > 0 && <Feedback
good={values.good}
neutral={values.neutral}
bad={values.bad}
total={totalFeedback}
positive={Math.round((values.good / totalFeedback) * 100)}
   />}
</>

 )
}

export default App


    
   
 