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
   const [userAnswer,setUserAnswer]=useState(Array(questions).fill(null).map(()=>[]));
   const alphabetArray=["A","B","C","D","E","F","G","H","I","J"]
   const correctAnswerArray = Array(questions).fill(null).map(() => []);
    const StarComponent=()=><p className='TestStart-stars'>★★★★</p>;
   const isMultipleChoice = QuizData.some((q) => q.correctAnswer.length > 1);
    
    const getRandomQuestions =(data, count) =>{
        const shuffled=[...data].sort(()=> 0.5 - Math.random());
        return shuffled.slice(0,count);
    }

    const [testData]= useState(() =>getRandomQuestions(QuizData,questions));
    const navigate=useNavigate();
    const handleTimeEnd =()=>{
        let correctAnswers=0;
        const correctAnswerUser = Array(questions).fill(false);
        testData.forEach((object,index)=>{

            object.options.forEach((option,optionIndex)=>{
                if(isMultipleChoice) {
                    testData[index].correctAnswer.forEach((testDataAnswer)=>{
                        if (testDataAnswer==option) {
                            correctAnswerArray[index].push(alphabetArray[optionIndex])
                  
                        }  
                    })
                }
                else
                {   
                    if(testData[index].correctAnswer==option)
                        correctAnswerArray[index]=(alphabetArray[optionIndex])
                }
                
            })
            const arr1 = userAnswer[index]
                const arr2= correctAnswerArray[index];
                const same =[...arr1].sort().join(",")===[...arr2].sort().join(",");
                if (same) {
                    correctAnswerUser[index]=true;
                    correctAnswers++
                }
                       
        })
        navigate('/test-end',{
            state:{
                score:correctAnswers/questions*100,
                correctAnswers: correctAnswers,
                userAnswer: userAnswer,
                correctAnswerArray:correctAnswerArray,
                testData:testData,
                correctAnswerUser:correctAnswerUser
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
                key={index}
                index={index+1}
                question={data.question} />
                {data.options.map((option,index_option)=>(
                <Answer
                key={`${index}${index_option}`}
                index ={alphabetArray[index_option]}
                index_question={index}
                answer={option} 
                userAnswer={userAnswer} 
                setUserAnswer={setUserAnswer} 
                isMultipleChoice={isMultipleChoice}/>
            
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