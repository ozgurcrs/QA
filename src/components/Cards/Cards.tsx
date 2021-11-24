import React from 'react'
import Card from './Card'


const Cards: React.FC<any> = ({ answer }) => {
    return (
        <div className="answers">
            <div className="cards">
                <Card />
            </div>
        </div>

    )
}


export default Cards;


