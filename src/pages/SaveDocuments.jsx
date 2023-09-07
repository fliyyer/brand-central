import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import bgDark from '../assets/images/bg-dark.png'
import SavedLayout from '../layout/SavedDocuments/SavedLayout'


function SaveDocuments() {

    return (
        <div className='w-full min-h-screen bg-cover'
            style={{ backgroundImage: `url(${bgDark})` }}>
            <div>
                <Navbar />
                <div className='flex justify-center items-center'>
                    <SavedLayout />
                </div>
            </div>
        </div>
    )
}

export default SaveDocuments
