import React from 'react'
import './ClickedDog.css'

export default function ClickedDog(props) {
    const dogInfo = props.dog;
  return (
    <section className='overlay'>
        <button onClick={props.handleClose}>x</button>
        <p>{dogInfo.name}</p>
        <p>Owner: {dogInfo.owner.name}</p>
    </section>
  )
}
