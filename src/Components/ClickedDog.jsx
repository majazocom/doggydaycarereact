import React from 'react'

export default function ClickedDog(props) {
    const dogInfo = props.dog;
  return (
    <section>
        <p>{dogInfo.name}</p>
        <p>Owner: {dogInfo.owner.name}</p>
    </section>
  )
}
