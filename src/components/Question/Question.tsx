import React from 'react'
import Cards from '../Cards/Cards'
import { Result } from '../../interfaces/IDataType';


type Data = {
    data: Result
}


const Question: React.FC<any> = ({ data }) => {
    return (
        <>
            <div className="question-area">
                <p>Selam </p>
            </div>
            <Cards />
        </>
    )
}


export default Question;