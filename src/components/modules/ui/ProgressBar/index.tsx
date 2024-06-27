import React from 'react'

const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <p>Question 1/20</p>
      <div className="progress-bar__container">
        <div className="progress-bar__fill"></div>
      </div>
    </div>
  )
}

export default ProgressBar
