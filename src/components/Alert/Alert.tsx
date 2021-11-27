import React from 'react'

type alertType = {
    questionNumber: number
}


const Alert: React.FC<alertType> = ({ questionNumber }) => {
    return (
        <div className="information">
            <span>{questionNumber}/10</span>
        </div>
    )
}


export default Alert;
