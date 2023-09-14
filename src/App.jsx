import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AllTools from './layout/AllTools/AllTools';
import SaveDocuments from './pages/SaveDocuments';
import SignBoardEdit from './layout/SignBoard/SignBoardEdit';
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

const router = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/profile', element: <Profile /> },
    { path: '/save-documents', element: <SaveDocuments /> },
    { path: 'all-tools', element: <AllTools /> },
    { path: 'sign-board/edit', element: <SignBoardEdit /> },
    { path: 'banner/edit/1x1', element: <BannerEdit1x1 /> },
    { path: 'banner/edit/2x1', element: <BannerEdit2x1 /> },
    { path: 'banner/edit/3x1', element: <BannerEdit3x1 /> },
    { path: 'banner/edit/4x1', element: <BannerEdit4x1 /> },
    { path: 'banner/edit/22x1', element: <BannerEdit22x1 /> },
    { path: 'banner/edit/60x160', element: <BannerEdit6x16 /> },
    { path: 'socialmedia/edit/1', element: <SmEdit1 /> },
    { path: 'socialmedia/edit/2', element: <SmEdit2 /> },
    { path: 'socialmedia/edit/3', element: <SmEdit3 /> },
    { path: 'socialmedia/edit/4', element: <SmEdit4 /> },
    { path: 'socialmedia/edit/5', element: <SmEdit5 /> },
    { path: 'socialmedia/edit/6', element: <SmEdit6 /> },
    { path: 'socialmedia/edit/7', element: <SmEdit7 /> },
    { path: 'socialmedia/edit/8', element: <SmEdit8 /> },
    { path: 'socialmedia/edit/9', element: <SmEdit9 /> },
    { path: 'socialmedia/edit/10', element: <SmEdit10 /> },
]);

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
