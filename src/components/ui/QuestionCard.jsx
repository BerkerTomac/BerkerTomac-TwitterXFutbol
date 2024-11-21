export const QuestionCard = ({ image, question, options, selectedOption, onOptionClick }) => {
    return (
      <div className="question-card">
        <img src={image} alt="Quiz" className="question-image" />
        <h3>{question}</h3>
        <div className="options">
          {options.map((option) => (
            <button
              key={option.id}
              className={`option-button ${selectedOption?.id === option.id ? "selected" : ""}`}
              onClick={() => onOptionClick(option)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    );
  };
  