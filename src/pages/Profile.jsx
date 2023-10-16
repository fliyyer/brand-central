import React from 'react'
import Navbar from '../components/Navbar'
import ProfileHeader from '../layout/Profile/ProfileHeader'
import Footer from '../components/Footer'
import { useAuthentication } from '../hooks/useAuthentication'

const Profile = () => {
    useAuthentication();

    return (
        <div className='w-full min-h-screen bg-cover bg-[#fff] dark:bg-bg-content '>
            <div>
                <Navbar />
                <div className='flex justify-center items-center'>
                    <ProfileHeader />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Profile
