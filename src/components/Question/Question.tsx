import React from 'react'
import Cards from '../Cards/Cards'
import { Result } from '../../interfaces/IDataType';
import { defaultLoadingOptions } from '../../lotties/lottieConfig'
import Lottie from 'react-lottie';


type Data = {
    question: Result
    callback: Function
}


const Question: React.FC<Data> = ({ question, callback }) => {

    return (
        <>
            <div className="question-area">
                <p>{question?.question}</p>
            </div>
            {
                question ? <Cards incorrect={question?.incorrect_answers} correct={question?.correct_answer} callback={callback} /> : <Lottie
                    options={defaultLoadingOptions}
                    height={300}
                    width={300}
                />
            }
        </>
    )
}

export default Question;