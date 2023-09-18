import React from 'react'
import './Motorist.css'

function CardSection(props) {
  return (
    <>
    <div className="card-img">
        <img src={props.image} alt="" />
        <div className="card-details">
            <h4>{props.head}</h4>
            <p>{props.para}</p>
            <a href="">{props.btn}</a>

        </div>
    </div>
    </>
  )
}

export default CardSection