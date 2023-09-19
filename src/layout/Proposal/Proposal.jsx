import React from 'react'
import Footer from '../../components/Footer'
import CardProposal from './CardProposal'
import Proposal_1 from '../../assets/images/proposal/proposal.png'

const Proposal = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-12 gap-8">
                <div className="grid grid-cols-1 gap-4 justify-center items-center">
                    <CardProposal title='Competition creators' img={Proposal_1} to='proposal/edit/1' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Proposal
