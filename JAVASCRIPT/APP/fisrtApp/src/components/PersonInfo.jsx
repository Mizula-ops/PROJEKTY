import {useState} from "react";
import "./PersonInfo.css"
export const PersonInfo = (props)=>{

  let stateArray=useState(false);
  let isExpanded = stateArray[0];
  let setIsExpanded = stateArray[1];
  const button= <button onClick={()=>{
    //isExpanded ? setIsExpanded(false): setIsExpanded(true);
    setIsExpanded(!isExpanded);
    }}>
    {isExpanded ? "Schowaj":"Pokaz"}
    </button>
  return(
    <>
    <li className={isExpanded ? "active" : ""}>
  <h2>{props.name}</h2>
  {button}
  {isExpanded && (
    <>
    <h3>
        Telefon: <a href= {props.tel}>{props.tel}</a>
    </h3>
  {props.city && <h3>Miasto: {props.city}</h3>} 
    </>
  )}
  </li>
  </>
  );
};
  