import React from 'react'

const Thumb = ({id,name,image,type,base_experience,abilities,
    }) => {
  return (
    <div className='thumb-container'>
        <div className='number'>
            <small>#0{id}</small>
        </div>
        <img src={image} alt={name}/>
        <div className='detail-wrapper'>
            <h1>{name}</h1>
            <h2>Type:{type}</h2>
            <h3>Exp:{base_experience}</h3>
        </div>
    </div>
  )
}

export default Thumb 