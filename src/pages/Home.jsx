import React from 'react'
import bgDark from '../assets/images/bg-dark.png'
import Navbar from '../components/Navbar'
import Header from '../layout/Home/Header'
import Contents from '../layout/Home/Contents'

const Home = () => {
    return (
        <div className='w-full min-h-screen bg-cover'
            style={{ backgroundImage: `url(${bgDark})` }}>
            <Navbar />
            <Header />
            <Contents />
        </div>
    )
}

export default Home
