import React from 'react';
import homeImg from '../../../public/assets/aroma.jpg';
import './Navbar.css';
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai"; // Close icon

function Navbar({
    isLoggedIn,
    handleLogin,
    handleLogout,
    isMenuClicked,
    handleMenuClick,
    handleCloseMenu,
    username,
    setUsername,
    password,
    setPassword,
    error
}) {
    return (
        <div>
            <div className='nav-container'>
                <span>
                    <img className='nav-home-image' src={homeImg} alt="Logo" />
                </span>
                <p>Aroma Tattva</p>
                <HiMenu onClick={handleMenuClick} className='nav-menu-button' size={30} />
            </div>

            {isMenuClicked && (
                <div className='modal-overlay'>
                    <div className='modal-content'>
                        <AiOutlineClose className='close-button' onClick={handleCloseMenu} size={24} />
                        {isLoggedIn ? (
                            <>
                                <p>Welcome, Admin!</p>
                                <button onClick={handleLogout} className='logout-button'>Logout</button>
                            </>
                        ) : (
                            <div className='login-container'>
                                <h3>Login</h3>
                                <input
                                    type='text'
                                    placeholder='Username'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className='input-field'
                                />
                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='input-field'
                                />
                                <button onClick={handleLogin} className='login-button'>Login</button>
                                {error && <p className='error-message'>{error}</p>}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar;
