import React from 'react';
import CardTool from '../../components/CardTool';
import Footer from '../../components/Footer';

function AllTools({ onCardToolClick }) {
    return (
        <><div className="flex justify-center py-12 items-center flex-wrap gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22.58px]">
                <CardTool
                    Label="SB"
                    Title={'Sign Board'}
                    description={'Make Quick Easy sign board for your promotion'}
                    onClick={() => onCardToolClick('Sign Board')} />
                <CardTool
                    Label="B"
                    Title={'Banner'}
                    description={'Make Quick Easy banner for your promotion'}
                    onClick={() => onCardToolClick('Banner')} />
                <CardTool
                    Label="SM"
                    Title={'Social Media'}
                    description={'Make Quick Easy social media template for your promotion'}
                    onClick={() => onCardToolClick('Social Media')} />
                <CardTool
                    Label="F"
                    Title={'Flyer'}
                    description={'Make Quick Easy Flyer template for your promotion'}
                    onClick={() => onCardToolClick('Flyer')} />
                <CardTool
                    Label="N"
                    Title={'Namecard'}
                    description={'Make Quick Easy namecard for your promotion'}
                    onClick={() => onCardToolClick('Namecard')} />
                <CardTool
                    Label="ES"
                    Title={'Email Signature'}
                    description={'Make Quick Easy banner for your promotion'}
                    onClick={() => onCardToolClick('Email Signature')} />
                <CardTool
                    Label="E"
                    Title={'Envelope'}
                    description={'Make Quick Easy envelope for your promotion'}
                    onClick={() => onCardToolClick('Envelope')} />
                <CardTool
                    Label="P"
                    Title={'Proposal'}
                    description={'Make Quick Easy proposal for your promotion'}
                    onClick={() => onCardToolClick('Proposal')} />
            </div>
        </div><Footer /></>
    );
}

export default AllTools;
