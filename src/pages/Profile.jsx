import React from 'react'
import Navbar from '../components/Navbar'
import ProfileHeader from '../layout/Profile/ProfileHeader'
import Footer from '../components/Footer'

const Profile = () => {
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
