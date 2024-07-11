import React from 'react'

interface ProgressBarProps {
  currentStep: number
  totalQuestions: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalQuestions,
}) => {
  const progressPercentage = ((currentStep + 1) / totalQuestions) * 100

  return (
    <div className="progress-bar" style={{ paddingTop: '5%' }}>
      <p>
        Question {currentStep + 1} / {totalQuestions}
      </p>
      <div className="progress-bar__container">
        <div
          className="progress-bar__fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
