import React from 'react'
import './Bannar.css'

function Bannar() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie name</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>

            </div>
            <h1 className='discription'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate </h1>
        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Bannar