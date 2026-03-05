import "../styles/Answer.css"
export const Answer= ({answer,userAnswer,setUserAnswer,index,index_question, isMultipleChoice}) =>{
    
    return(
        <>
        <label className="Answer-label container">
    <input
        type={isMultipleChoice ? "checkbox":"radio"}
        name={`answer-${index_question}`}
        onChange={(e) => {
            const checked=e.target.checked
            const updated = [...userAnswer];
            if(isMultipleChoice){
                if(checked)
                {
                    updated[index_question].push(index);
                   
                }
            
                else {
                    const idx=updated[index_question].indexOf(index);
                    updated.splice(idx,1);
                   
                }
            }
            else
                updated[index_question]=index;
            setUserAnswer(updated);
        
        }}
    />
    <span className="checkmark"></span> 
    <div className="answer-text">{index}: {answer}</div> {/* może być po wszystkim */}
</label>
        </>
    )
}