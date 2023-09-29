import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../layout/Home/Header'
import Contents from '../layout/Home/Contents'

const Home = () => {
    return (
        <><Navbar /><div className='w-full min-h-screen bg-[#f2f2f2] dark:bg-bg-content bg-cover'>
            <Header />
            <Contents />
        </div></>
    )
}

export default Home
