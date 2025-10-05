import { PersonInfo } from './components/PersonInfo.jsx';
import { Form } from './components/Form.jsx';
import { useState } from 'react';
import "./App.css"
const initialPeople=[
  {
  name: "Alicja",
  tel:512456432,
  city:"Potęgowo"
  },
  {
  name: "Artur",
  tel:512434212,
  city:"Połczyn"
  },
  {
  name: "Bober",
  tel:51243222
  
  }
]


function App() {
 const [isFormShown,setIsFormShown]=useState(false);
 const handleShownFromClick=()=>setIsFormShown(true);
 const [people,setPeople]=useState(initialPeople);
 
 const addPerson =(data)=>{
  const newPeople =[...people, data];
  setPeople(newPeople);
  setIsFormShown(false);
 }
 return(
    <>
      <h1>Lista kontaktow</h1>
      {isFormShown ?(<Form onAddPerson={addPerson} />):(<button onClick={handleShownFromClick}>
        Dodaj
      </button>) }
      
      <ul>
         {people.map((person)=>(
          <PersonInfo 
          key={person.tel}
          name={person.name} 
          tel={person.tel} 
          city={person.city}/>))}
      </ul>
    </>
  )
}

export default App
