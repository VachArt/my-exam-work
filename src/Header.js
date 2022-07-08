import React from 'react'
import Pic from './img/exam-img.png'

export const Header = () => {
    return (
        <div className='header'>
            <div className='header_info'>
                <h1 className='header_title'>How the scenes fit together</h1>
                <p className='header_text'>Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.</p>
            </div>
            <div className='header_image'>
                <img src={Pic} alt='kuku' className='img'/>
            </div>
        </div>
    )
}