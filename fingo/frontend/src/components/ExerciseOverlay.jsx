import React, { useState, useEffect } from 'react';
import './ExerciseOverlay.css';

const ExerciseOverlay = ({ lesson, onComplete, onClose }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const currentQuestion = lesson.questions[currentQuestionIndex];

    const handleCheck = () => {
        const correct = selectedOption === currentQuestion.correctIndex;
        setIsCorrect(correct);
        setShowFeedback(true);
    };

    const handleContinue = () => {
        if (currentQuestionIndex < lesson.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsCorrect(null);
            setShowFeedback(false);
        } else {
            onComplete();
        }
    };

    // Progress Bar
    const progress = ((currentQuestionIndex) / lesson.questions.length) * 100;

    return (
        <div className="exercise-overlay">
            <div className="exercise-header">
                <button className="close-button" onClick={onClose}>✕</button>
                <div className="progress-container">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="hearts">❤️ 5</div>
            </div>

            <div className="exercise-content">
                {currentQuestion.type === 'multiple_choice' && (
                    <div className="question-section">
                        <h2 className="question-text">{currentQuestion.question}</h2>
                        <div className="options-grid">
                            {currentQuestion.options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`option-button ${selectedOption === index ? 'selected' : ''}`}
                                    onClick={() => !showFeedback && setSelectedOption(index)}
                                >
                                    <span className="option-number">{index + 1}</span>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Simplified feedback mascot area */}
                <div className="mascot-feedback-area">
                    <div className={`mascot-bubble ${showFeedback ? 'visible' : ''}`}>
                        {showFeedback ? (isCorrect ? 'Correct! 🌟' : 'Not quite. 💡') : 'What do you think?'}
                    </div>
                    <div className={`mascot-avatar ${isCorrect === true ? 'happy' : isCorrect === false ? 'sad' : ''}`}>
                        {isCorrect === true ? '🦏✨' : isCorrect === false ? '🦏💭' : '🦏'}
                    </div>
                </div>
            </div>

            <div className={`feedback-bar ${showFeedback ? 'visible' : ''} ${isCorrect ? 'correct' : 'incorrect'}`}>
                <div className="feedback-content">
                    <div className="feedback-text">
                        <h3>{isCorrect ? 'Excellent!' : 'Correct Answer:'}</h3>
                        <p>{isCorrect ? 'You nailed it.' : currentQuestion.options[currentQuestion.correctIndex]}</p>
                    </div>
                    <button className="continue-button" onClick={handleContinue}>
                        Continue
                    </button>
                </div>
            </div>

            {!showFeedback && (
                <div className="action-bar">
                    <button
                        className="check-button"
                        disabled={selectedOption === null}
                        onClick={handleCheck}
                    >
                        Check
                    </button>
                </div>
            )}
        </div>
    );
};

export default ExerciseOverlay;
