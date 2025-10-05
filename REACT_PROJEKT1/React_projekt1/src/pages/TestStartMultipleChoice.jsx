import {useLocation} from 'react-router-dom';
import { Timer } from '../components/Timer.jsx';
import { useNavigate } from 'react-router-dom';
import { Question} from '../components/Question.jsx';
import { Answer} from '../components/Answer.jsx';
import {useState} from 'react';
import '../styles/TestStart.css';

const TestStart=() =>{
   const location = useLocation();
   const {questions,time, QuizData} = location.state || {};
   const [userAnswer,setUserAnswer]=useState(Array(questions).fill(""));
   const alphabetArray=["A","B","C","D","E","F","G","H","I","J"]
   const correctAnswerArray=Array(questions).fill("");

   
    const getRandomQuestions =(data, count) =>{
        const shuffled=[...data].sort(()=> 0.5 - Math.random());
        return shuffled.slice(0,count);
    }

    const [testData]= useState(() =>getRandomQuestions(QuizData,questions));
   
    const navigate=useNavigate();
    const StarComponent=()=><p className='TestStart-stars'>★★★★</p>;

    const handleTimeEnd =()=>{
        let correctAnswers=0;
        
        testData.forEach((object,index)=>{
            object.options.forEach((option,index_option)=>{
                if (testData[index].correctAnswer===option) correctAnswerArray[index]=alphabetArray[index_option]
            })
        })
        userAnswer.forEach((entry,index)=>{

            if (entry===correctAnswerArray[index]) correctAnswers++;
        })
        navigate('/test-end',{
            state:{
                score:correctAnswers/questions*100,
                correctAnswers: correctAnswers,
                userAnswer: userAnswer,
                correctAnswerArray:correctAnswerArray,
                testData:testData
            }
        })
   }

    return(
        <>
        <div className='TestStart-container'>
            <h1 className='TestStart-h1'>Rozpoczęto Test  {questions} pytań</h1>
          
            {time === 0 ? "": <Timer time={time} onTimeEnd={handleTimeEnd}/>}
           
            {testData.map((data,index)=>(
                <div className="TestStart-main" key={index}>
                <Question
                index={index+1}
                question={data.question} />
                {data.options.map((option,index_option)=>(
                <Answer
                key={`${index}${index_option}`}
                index ={alphabetArray[index_option]}
                index_question={index}
                answer={option} 
                userAnswer={userAnswer} 
                setUserAnswer={setUserAnswer} />
            
            ))}
            
            <StarComponent/>
            </div> 
            ))}
            {time === 0 ? "": <><Timer time={time} onTimeEnd={handleTimeEnd}/> <StarComponent/></>}
           
           <div>
            <button className="TestStart-button" onClick={handleTimeEnd}>ZAKOŃCZ TEST</button>
           </div>
            <StarComponent/>
        </div>
        </>
    );
};
export default TestStart;