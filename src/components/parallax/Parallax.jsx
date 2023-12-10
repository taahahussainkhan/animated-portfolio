import React from 'react'
import './parallax.scss'


export const Parallax = (props) => {
  return (
    <div className='parallax' style={{
      background:
      props.type === "services" ? 
      "linear-gradient(180deg, #111132, #0c0c1d)":
       "linear-gradient(180deg, #111132, #505064)"
    }}>
      <h1>{props.type === "services" ? "What We Do?" : "What We Did?"}</h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  )
}
