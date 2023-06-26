
import Navbar from 'Components/Navbar.jsx';
import axios from './axios.js';
import Protected from 'Components/Protected';
import Login from 'Pages/auth/Login';
import Register from 'Pages/auth/Register';
import Dashboard from 'Pages/Dashboard/Dashboard';
import Home from 'Pages/Home';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from 'Pages/About.jsx';

function AppRouter() {
    const [isSignedIn, setIsSignedIn] = useState(false)
    const navigate = useNavigate();
    const signout = (e) => {
        setIsSignedIn(false)
    }

    useEffect(() => {
        const checkAuth = async () => {
            await axios.get('auth-user').then(({ bool, result }) => {
                setIsSignedIn(true)
                navigate('/home')
            }).catch(err => {
                console.log(err)
            })
        }
        checkAuth()
    }, [navigate])

    console.log(isSignedIn)

    return (
        <>

            <Navbar />
            <div className="container-fluid">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={
                        <Protected isSignedIn={isSignedIn}>
                            <Dashboard />
                        </Protected>
                    } />
                    <Route path="/logout" element={() => signout()} />
                </Routes>
            </div>
        </>
    );
}

export default AppRouter;
