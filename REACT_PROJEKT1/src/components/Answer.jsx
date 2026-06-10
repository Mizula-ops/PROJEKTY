import "../styles/Answer.css";

export const Answer = ({
  answer,
  userAnswer,
  setUserAnswer,
  index,
  index_question,
  isMultipleChoice
}) => {
  return (
    <label className="Answer-label container">
      <input
        type={isMultipleChoice ? "checkbox" : "radio"}
        name={`answer-${index_question}`}
        onChange={(e) => {
          const checked = e.target.checked;
          const updated = [...userAnswer];

          if (isMultipleChoice) {
            const currentAnswers = Array.isArray(updated[index_question])
              ? [...updated[index_question]]
              : [];

            if (checked) {
              currentAnswers.push(index);
            } else {
              updated[index_question] = currentAnswers.filter(
                (item) => item !== index
              );
              setUserAnswer(updated);
              return;
            }

            updated[index_question] = currentAnswers;
          } else {
            updated[index_question] = index;
          }

          setUserAnswer(updated);
        }}
      />

      <span className="checkmark"></span>
      <div className="answer-text">
        {index}: {answer}
      </div>
    </label>
  );
};