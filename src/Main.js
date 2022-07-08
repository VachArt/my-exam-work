import React from 'react'
import Shield from './img/shield.png'
import Star from './img/star.png'
import Lupa from './img/lupa.png'

export const Main = () => {
    return (
        <div className='main'>
            <div className='main_info'>
                <h1 className='main_title'>Consider everyone's best interest</h1>
                <p className='main_subtitle'>HR is for everyone. Clerksy can help you.</p>
            </div>
            <div className='main_cards'>
                <div className='card'>
                    <img src={Shield} alt='kuku'/>
                    <h2 className='card_title'>Protect Your Company</h2>
                    <ul className='card_list'>
                        <li className='card_item'>Compliance Audits & Training</li>
                        <li className='card_item'>Employee Data Storage</li>
                        <li className='card_item'>Policy Drafting</li>
                    </ul>
                </div>
                <div className='card'>
                    <img src={Star} alt='kuku'/>
                    <h2 className='card_title'>Set Your Employees Up For Success</h2>
                    <ul className='card_list'>
                        <li className='card_item'>Learning & Development</li>
                        <li className='card_item'>Employee Relations</li>
                        <li className='card_item'>Benefit Management</li>
                        <li className='card_item'>Employee Performance</li>
                    </ul>
                </div>
                <div className='card'>
                    <img src={Lupa} alt='kuku'/>
                    <h2 className='card_title'>Know Your Industry's Legal Landscape</h2>
                    <ul className='card_list'>
                        <li className='card_item'>Work Place Investigations</li>
                        <li className='card_item'>Employee Mediations</li>
                        <li className='card_item'>Performance Tracking</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}