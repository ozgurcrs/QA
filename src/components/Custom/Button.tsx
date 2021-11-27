import React from 'react';

type ButtonType = {
    onClick: Function,
    textArea?: string,
    optionName?: string
}

const Button: React.FC<ButtonType> = ({ optionName, onClick, textArea }) => {
    return (
        <button onClick={() => onClick()}>
            <p>{optionName} {textArea}</p>
        </button>
    );
}

export default Button;
