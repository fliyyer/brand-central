import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SavedLayout from '../layout/SavedDocuments/SavedLayout'
import { useAuthentication } from '../hooks/useAuthentication'


function SaveDocuments() {
    useAuthentication();
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
