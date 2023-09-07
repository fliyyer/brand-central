import React from 'react'
import CardSignBoard from './CardSignBoard'
import SB_8x6 from '../../assets/images/SB-8x6.png'
import SB_8x6l from '../../assets/images/SB-8x6l.png'


const SignBoard = () => {
    return (
        <div className="flex justify-center py-12 items-center flex-wrap gap-8">
            <CardSignBoard />
        </div>
    )
}

export default SignBoard
