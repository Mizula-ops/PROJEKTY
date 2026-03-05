import { useLocation } from 'react-router-dom';
import { Question } from '../components/Question.jsx';
import { AnswerFinish } from '../components/AnswerFinish.jsx';
import { CommentsUserAnswer} from '../components/CommentsUserAnswer.jsx';
import '../styles/TestEnd.css';
const TestEnd = () => {
  const location = useLocation();
  const { score,correctAnswers,userAnswer,correctAnswerArray,testData, correctAnswerUser } = location.state || {};

  const StarComponent=()=><p className='TestEnd-stars'>★★★★</p>;
  const alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  return (
    <>
    
      <div className="TestEnd-container">
        
          <h1 className='TestEnd-h1'>Wyniki testu {userAnswer.length} pytań</h1>
          <p className='TestEnd-p'>Uzyskany wyniki: {score}% ({correctAnswers ? correctAnswers:0}/{userAnswer.length})</p>
      

        <div>
          {testData.slice(0, userAnswer.length).map((data, index) => (
            <div className="TestEnd-main" key={index}>
              <Question 
              key={index} 
              index={index + 1} 
              question={data.question} />
              <CommentsUserAnswer 
              key={index}
              equal={ correctAnswerUser[index]}
              userAnswer={userAnswer[index]}
              correct_answer={correctAnswerArray[index]}
             
              
              />
              {data.options.map((option, index_option) => (
                <AnswerFinish
                  key={`${index}-${index_option}`}
                  index={alphabetArray[index_option]}
                  index_question={index}
                  answer={option}
                  correct_answer={correctAnswerArray[index]}
                  userAnswer={userAnswer[index]}
                
                />
              ))}
               <StarComponent/>
            </div>
           
          ))}
        </div>
      </div>
    </>
  );
};

export default TestEnd;
