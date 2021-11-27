import React, { useEffect, useState } from 'react'
import Button from '../Custom/Button'


type CardType = {
    options: string[],
    callback: Function,
    correct: string
}

const Card: React.FC<CardType> = ({ options, callback, correct }) => {
    const optionName = ["A)", "B)", "C)", "D)"]
    const [shuffleOptions, setSuffleOptions] = useState<string[]>([]);

    const shuffleArray = () => {
        const suffle = options.sort(() => Math.random() - 0.5);
        setSuffleOptions(suffle)
    }

    useEffect(() => {
        shuffleArray();
    })

    return (
        <>
            {
                shuffleOptions.map((item: string, key: number) => {
                    return (
                        <div className="card" key={key}>
                            <Button optionName={optionName[key]} textArea={item} onClick={() => callback(item, correct)} />
                        </div>
                    )
                })
            }
        </>
    )
}


export default Card
