import "../styles/Question.css"
export const Question= ({question,index}) =>{
    
    return(
        <>
        <div className="Question-question">
            <span className="Question-span">Pytanie {index}: {question}</span>
        </div>
            
        </>
    )
}