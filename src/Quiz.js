import React, { useState } from 'react'

const Quiz = () => {
    const questions = [
        {
            id: 0,
            question: "Which of the following is used in React.js to increase performance?",
            choices: [
                { Option: "Virtual DOM", isCurrect: true },
                { Option: "Original DOM", isCurrect: false },
                { Option: "Both A and B", isCurrect: false },
                { Option: "None of the above", isCurrect: false }
            ],
        },
        {
            id: 1,
            question: "What is ReactJS?",
            choices: [
                { Option: "Server-side framework", isCurrect: false },
                { Option: "User Interface framework", isCurrect: true },
                { Option: "both a and b", isCurrect: false },
                { Option: "None of the above", isCurrect: false }
            ],
        },
        {
            id: 2,
            question: "Identify the one which is used to pass data to components from outside",
            choices: [
                { Option: "Render with arguments", isCurrect: false },
                { Option: "setState", isCurrect: false },
                { Option: "PropTypes", isCurrect: false },
                { Option: "props", isCurrect: true }
            ],

        },
        {
            id: 3,
            question: "In which language is React.js written?",
            choices: [
                { Option: "Python", isCurrect: false },
                { Option: "Java", isCurrect: false },
                { Option: "C#", isCurrect: false },
                { Option: "JavaScript", isCurrect: true }
            ],
        },
        {
            id: 4,
            question: "What is Babel?",
            choices: [
                { Option: "JavaScript interpreter", isCurrect: false },
                { Option: "JavaScript transpiler", isCurrect: false },
                { Option: "JavaScript compiler", isCurrect: false },
                { Option: "None of the above", isCurrect: true }
            ],
        }
    ]
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerButtonClick = (isCurrect) => {
        if (isCurrect === true) {
            setScore(score + 1);
        }
    };

    const handleNextButtonClick = () => {
        const newQuestion = currentQuestion + 1;
        if (newQuestion < questions.length) {
            setCurrentQuestion(newQuestion);
        } else {
            setShowScore(true);
        }
    };


    return (
        <div>
            {showScore ? (
                <div className='score-section'>You scored {score} out of {questions.length}</div>
            ) : (
                <>
                    <div className="quiz-box">
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question'>Question: {questions[currentQuestion].question}</div>

                        {questions[currentQuestion].choices.map((data) => (<button className="option" onClick={() => handleAnswerButtonClick(data.isCurrect)}>{data.Option}</button>))}

                        <button className="next" onClick={handleNextButtonClick}>Next</button>
                    </div>
                </>
            )
            }

        </div>





    )
}

export default Quiz;