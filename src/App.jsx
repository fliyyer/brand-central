/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Provider, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import store from '../src/redux/store'
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AllTools from './layout/AllTools/AllTools';
import SaveDocuments from './pages/SaveDocuments';
import SignBoardEdit1 from './layout/SignBoard/SignBoardEdit1';
import BannerEdit1x1 from './layout/Banner/BannerEdit1x1';
import BannerEdit2x1 from './layout/Banner/BannerEdit2x1';
import BannerEdit3x1 from './layout/Banner/BannerEdit3x1';
import BannerEdit4x1 from './layout/Banner/BannerEdit4x1';
import BannerEdit22x1 from './layout/Banner/BannerEdit22x1';
import BannerEdit6x16 from './layout/Banner/BannerEdit6x16';
import SmEdit1 from './layout/SocialMedia/SmEdit1';
import SmEdit2 from './layout/SocialMedia/SmEdit2';
import SmEdit3 from './layout/SocialMedia/SmEdit3';
import SmEdit4 from './layout/SocialMedia/SmEdit4';
import SmEdit5 from './layout/SocialMedia/SmEdit5';
import SmEdit6 from './layout/SocialMedia/SmEdit6';
import SmEdit7 from './layout/SocialMedia/SmEdit7';
import SmEdit8 from './layout/SocialMedia/SmEdit8';
import SmEdit9 from './layout/SocialMedia/SmEdit9';
import SmEdit10 from './layout/SocialMedia/SmEdit10';
import FlyerEdit1 from './layout/Flyer/FlyerEdit1';
import FlyerEdit2 from './layout/Flyer/FlyerEdit2';
import FlyerEdit3 from './layout/Flyer/FlyerEdit3';
import EmailSignaturEdit1 from './layout/EmailSignature/EmailSignatureEdit1';
import EmailSignaturEdit2 from './layout/EmailSignature/EmailSignatureEdit2';
import EnvelopeEdit1 from './layout/Envelope/EnvelopeEdit1';
import EnvelopeEdit2 from './layout/Envelope/EnvelopeEdit2';
import NamecardEdit1 from './layout/Namecard/NamecardEdit1';
import NamecardEdit2 from './layout/Namecard/NamecardEdit2';
import ProposalEdit from './layout/Proposal/ProposalEdit';
import NamecardEdit3 from './layout/Namecard/NamecardEdit3';
import SignBoardEdit2 from './layout/SignBoard/SignBoardEdit2';
import SignBoardEdit3 from './layout/SignBoard/SignBoardEdit3';
import SignBoardEdit4 from './layout/SignBoard/SignBoardEdit4';
import SignBoardEdit5 from './layout/SignBoard/SignBoardEdit5';
import SignBoardEdit6 from './layout/SignBoard/SignBoardEdit6';
import SignBoardEdit7 from './layout/SignBoard/SignBoardEdit7';
import SignBoardEdit8 from './layout/SignBoard/SignBoardEdit8';
import SignBoardEdit9 from './layout/SignBoard/SignBoardEdit9';
import SignBoardEdit10 from './layout/SignBoard/SignBoardEdit10';
import SignBoardEdit11 from './layout/SignBoard/SignBoardEdit11';
import SignBoardEdit12 from './layout/SignBoard/SignBoardEdit12';
import SignBoardEdit13 from './layout/SignBoard/SignBoardEdit13';
import SignBoardEdit14 from './layout/SignBoard/SignBoardEdit14';
import SignBoardEdit15 from './layout/SignBoard/SignBoardEdit15';
import SignBoardEdit16 from './layout/SignBoard/SignBoardEdit16';
import { selectIsAuthenticated } from './redux/Slice/authSlice';

const App = () => {
    const savedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(savedTheme || 'light');
    const element = document.documentElement;

    useEffect(() => {
        switch (theme) {
            case 'dark':
                element.classList.add('dark');
                break;
            case 'light':
                element.classList.remove('dark');
                break;
            default:
                break;
        }
    }, [theme]);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const isAuthenticated = useSelector(selectIsAuthenticated)
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path='/' element={<Home />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/save-documents' element={<SaveDocuments />} />
                <Route path='/alltools' element={<AllTools />} />
                <Route path='/sign-board/edit1' element={<SignBoardEdit1 />} />
                <Route path='/sign-board/edit2' element={<SignBoardEdit2 />} />
                <Route path='/sign-board/edit3' element={<SignBoardEdit3 />} />
                <Route path='/sign-board/edit4' element={<SignBoardEdit4 />} />
                <Route path='/sign-board/edit5' element={<SignBoardEdit5 />} />
                <Route path='/sign-board/edit6' element={<SignBoardEdit6 />} />
                <Route path='/sign-board/edit7' element={<SignBoardEdit7 />} />
                <Route path='/sign-board/edit8' element={<SignBoardEdit8 />} />
                <Route path='/sign-board/edit9' element={<SignBoardEdit9 />} />
                <Route path='/sign-board/edit10' element={<SignBoardEdit10 />} />
                <Route path='/sign-board/edit11' element={<SignBoardEdit11 />} />
                <Route path='/sign-board/edit12' element={<SignBoardEdit12 />} />
                <Route path='/sign-board/edit13' element={<SignBoardEdit13 />} />
                <Route path='/sign-board/edit14' element={<SignBoardEdit14 />} />
                <Route path='/sign-board/edit15' element={<SignBoardEdit15 />} />
                <Route path='/sign-board/edit16' element={<SignBoardEdit16 />} />
                <Route path='/banner/edit/1x1' element={<BannerEdit1x1 />} />
                <Route path='/banner/edit/2x1' element={<BannerEdit2x1 />} />
                <Route path='/banner/edit/3x1' element={<BannerEdit3x1 />} />
                <Route path='/banner/edit/4x1' element={<BannerEdit4x1 />} />
                <Route path='/banner/edit/22x1' element={<BannerEdit22x1 />} />
                <Route path='/banner/edit/60x160' element={<BannerEdit6x16 />} />
                <Route path='/socialmedia/edit/1' element={<SmEdit1 />} />
                <Route path='/socialmedia/edit/2' element={<SmEdit2 />} />
                <Route path='/socialmedia/edit/3' element={<SmEdit3 />} />
                <Route path='/socialmedia/edit/4' element={<SmEdit4 />} />
                <Route path='/socialmedia/edit/5' element={<SmEdit5 />} />
                <Route path='/socialmedia/edit/6' element={<SmEdit6 />} />
                <Route path='/socialmedia/edit/7' element={<SmEdit7 />} />
                <Route path='/socialmedia/edit/8' element={<SmEdit8 />} />
                <Route path='/socialmedia/edit/9' element={<SmEdit9 />} />
                <Route path='/socialmedia/edit/10' element={<SmEdit10 />} />
                <Route path='/flyer/edit/1' element={<FlyerEdit1 />} />
                <Route path='/flyer/edit/2' element={<FlyerEdit2 />} />
                <Route path='/flyer/edit/3' element={<FlyerEdit3 />} />
                <Route path='/emailsignature/edit/1' element={<EmailSignaturEdit1 />} />
                <Route path='/emailsignature/edit/2' element={<EmailSignaturEdit2 />} />
                <Route path='/envelope/edit/1' element={<EnvelopeEdit1 />} />
                <Route path='/envelope/edit/2' element={<EnvelopeEdit2 />} />
                <Route path='/namecard/edit/1' element={<NamecardEdit1 />} />
                <Route path='/namecard/edit/2' element={<NamecardEdit2 />} />
                <Route path='/namecard/edit/3' element={<NamecardEdit3 />} />
                <Route path='/proposal/edit/1' element={<ProposalEdit />} />
            </Routes>
        </Router>
    )
}

export default App
