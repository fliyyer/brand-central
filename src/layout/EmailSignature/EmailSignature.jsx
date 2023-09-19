import React from 'react'
import Footer from '../../components/Footer'
import CardEmailSignature from './CardEmailSignature'
import Email_1 from '../../assets/images/email-signature/emailsignature1.png'
import Email_2 from '../../assets/images/email-signature/emailsignature2.png'

const EmailSignature = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-12 gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[19px] justify-center items-center">
                    <CardEmailSignature title='White Email Signature' img={Email_1} to='emailsignature/edit/1' />
                    <CardEmailSignature title='Black Email Signature' img={Email_2} to='emailsignature/edit/2' />
                </div>
            </div>
            <Footer position='bottom-0 md:absolute right-0 left-0' />
        </>
    )
}

export default EmailSignature
