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
]);

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
