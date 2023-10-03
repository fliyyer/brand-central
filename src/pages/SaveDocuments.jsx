import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SavedLayout from '../layout/SavedDocuments/SavedLayout'


function SaveDocuments() {

    return (
        <div className='w-full min-h-screen bg-cover bg-[#fff] dark:bg-bg-content'>
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
