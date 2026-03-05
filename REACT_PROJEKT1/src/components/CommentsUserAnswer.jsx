import "../styles/CommentsUserAnswer.css"
export const CommentsUserAnswer= ({equal,userAnswer,correct_answer}) =>{
    
    if (equal)
        return <p className='commentsUserAnswer-good'>Dobrze, Twoja odpowiedź: {correct_answer} jest poprawna</p>
    else if (userAnswer.length>=1) 
        return <p className='commentsUserAnswer-wrong'>Źle, Poprawna odpowiedź to: {correct_answer}. (Twoja odpowiedź: {userAnswer})</p>
    else 
            return <p className='commentsUserAnswer-without'>Nie udzielono odpowiedzi. Poprawna odpowiedź: {correct_answer}</p>
}