import React from 'react';
import CardTool from '../../components/CardTool';
import Footer from '../../components/Footer';

function AllTools() {
    return (
        <><div className="flex justify-center py-12 items-center flex-wrap gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                <CardTool
                    Label="SB"
                    Title={'Sign Board'}
                    description={'Make Quick Easy sign board for your promotion'}
                    To="/login" />
                <CardTool
                    Label="B"
                    Title={'Banner'}
                    description={'Make Quick Easy banner for your promotion'}
                    To="/login" />
                <CardTool
                    Label="SM"
                    Title={'Social Media'}
                    description={'Make Quick Easy social media template for your promotion'}
                    To="/login" />
                <CardTool
                    Label="F"
                    Title={'Flyer'}
                    description={'Make Quick Easy Flyer template for your promotion'}
                    To="/login" />
                <CardTool
                    Label="N"
                    Title={'Namecard'}
                    description={'Make Quick Easy namecard for your promotion'}
                    To="/login" />
                <CardTool
                    Label="ES"
                    Title={'Email Signature'}
                    description={'Make Quick Easy banner for your promotion'}
                    To="/login" />
                <CardTool
                    Label="E"
                    Title={'Envelope'}
                    description={'Make Quick Easy envelope for your promotion'}
                    To="/login" />
                <CardTool
                    Label="P"
                    Title={'Proposal'}
                    description={'Make Quick Easy proposal for your promotion'}
                    To="/login" />
            </div>
        </div><Footer /></>
    );
}

export default AllTools;
