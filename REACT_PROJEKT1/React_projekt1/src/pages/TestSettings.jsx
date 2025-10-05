import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import "../styles/TestSettings.css"
const TestSettings=() =>{

    const [questions,setQuestion]=useState(0);
    const [time,setTime]=useState(0);
    const navigate =useNavigate();
    const location = useLocation();
   const {QuizData} = location.state || {};
    
   const checkSettings=()=>{
        navigate('/test-start',{
            state:{
                questions:QuizData.length,
                time:0,
                QuizData
            }
        })
    }
    return(
        <>
        <div className="TestSettings-container">
            <div className="testSettings-option1">
                <button className='TestSettings-option1' onClick={checkSettings}><h1 className='TestSettings-h1'>Standardowy Test (Wszystkie Pytania)</h1></button>
            </div>
            <div className='TestSettings-option2'>
                <div className='TestSettings-option2-container'>
                    <h1 className='TestSettings-h1'>Zmodyfikowany Test</h1>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        navigate("/test-start",{
                            state:{ 
                                questions,
                                time,
                                QuizData:QuizData
                            }
                        })
                        
                    }}>
                        <div className="settings">
                            <label htmlFor="how_questions">Podaj liczbe pytan:</label>
                            <input id="first_input" className='input_select'
                            onChange={(e)=>setQuestion(Number(e.target.value))}
                            type="number"
                            step="5"
                            min="0"
                            max="40"
                            placeholder="0"
                            name="which" /> 
                            
                        </div>
                        <div className="settings">
                            <label htmlFor="kategoria">Wybierz czas trwania:</label>
                            <select id="second_input" className='input_select'
                            onChange={(e) =>{
                                setTime(Number(e.target.value));
                            }}
                            name="time">
                            <option value="0">bez limitu</option>
                            <option value="30">30m</option>
                            <option value="45">45m</option>
                            <option value="60">1h</option>
                            <option value="90">1h 30m</option>
                            <option value="120">2h</option>
                            <option value="150">2h 30m</option>
                            </select>
                        </div>
                        <div className="click_button">
                        <button id="button_start_test"
                        disabled={questions ===0}
                        >Rozpocznij Test</button> 
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
        

        </>
    )
}
export default TestSettings;