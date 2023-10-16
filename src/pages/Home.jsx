import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../layout/Home/Header'
import Contents from '../layout/Home/Contents'
import { useAuthentication } from '../hooks/useAuthentication'

const Home = () => {
    useAuthentication();
    return (
        <div className='w-full min-h-screen bg-cover bg-[#f2f2f2] dark:bg-bg-content '>
            <div>
                <Navbar />
                <Header />
                <Contents />
            </div>
        </div>
    )
}

export default Home
