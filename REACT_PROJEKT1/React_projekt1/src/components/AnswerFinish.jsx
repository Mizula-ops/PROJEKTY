import "../styles/AnswerFinish.css"
export const AnswerFinish= ({answer,userAnswer,index,correct_answer}) =>{
    
    let className= "answer";
        const idxIsCorrect=correct_answer.indexOf(index);
        const idxIsUserAnswer =userAnswer.indexOf(index);
        if (idxIsCorrect >-1)
        {
            className ="good";
        }
        else if(idxIsUserAnswer >-1){
          className ="wrong";
        }
   
   
    
  
    return(
        <>
        <label className="container">
            <div className={`AnswerFinish-${className}`}>
                
                <div className="text">{index}:  {answer}</div>
            </div>
           
           
        </label>
            
        </>
    )
}