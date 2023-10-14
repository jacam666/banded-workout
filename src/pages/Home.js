import React from 'react'
import Header from '../Components/Header'
import "../styles/Homepage.css"


function Home() {
    return (
        <div className='homepage-header-container'>
            <Header />
            <h1 className='homepage-header'>
                Get off your ass and train
            </h1>
        </div>
    )
}

export default Home