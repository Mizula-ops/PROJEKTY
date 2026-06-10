
import { useNavigate } from 'react-router-dom';
import { transmissionData } from '../data/transmissionData';
import { reactJsHtml } from '../data/reactJsHtml';
import { dataBase } from '../data/dataBase';
import { multimedia } from '../data/multimedia';
import "../styles/AllTests.css"

const AllTest=() =>{

    const navigate =useNavigate();
    const checkSettings=(e)=>{
        navigate('/test-settings',{
            state:{
                QuizData:e
            }
        })
    }
    return(
        <>
        <div id="AllTests-container">
            <h1>Wybierz test</h1>
            <button className='AllTest-button' onClick={ ()=> checkSettings(reactJsHtml)}>React Js Html </button>
            <button className='AllTest-button' onClick={ ()=> checkSettings(transmissionData)}>Transmisja Danych</button>
            <button className='AllTest-button' onClick={ ()=> checkSettings(dataBase)}>Baza danych</button>
            <button className='AllTest-button' onClick={() => checkSettings(multimedia)}>Multimedia</button>
        </div>
        </>
    )
};
export default AllTest;