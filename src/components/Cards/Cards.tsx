import React, { useEffect, useState } from 'react'
import Card from './Card'

type answers = {
    incorrect: string[]
    correct: string,
    callback: Function
}

const Cards: React.FC<answers> = ({ incorrect, correct, callback }) => {

    const [totalOptions, setTotalOptions] = useState<string[]>([])

    useEffect(() => {
        setTotalOptions([...incorrect, correct])
    }, [incorrect])


    return (

        <div className="answers">
            <div className="cards">
                <Card options={totalOptions} callback={callback} correct={correct} />
            </div>
        </div>

    )
}


export default Cards;


