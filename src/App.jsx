import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import AllTools from './layout/AllTools/AllTools'
import SaveDocuments from './pages/SaveDocuments'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path: '/save-documents',
        element: <SaveDocuments />
    },
    {
        path: 'all-tools',
        element: <AllTools />
    }
])

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
