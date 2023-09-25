import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../layout/Home/Header'
import Contents from '../layout/Home/Contents'

const Home = () => {
    return (
        <div className='w-full min-h-screen bg-cover bg-dark dark:bg-white'>
            <Navbar />
            <Header />
            <Contents />
        </div>
    )
}

export default Home
