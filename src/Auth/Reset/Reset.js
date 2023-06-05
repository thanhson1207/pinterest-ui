import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, sendPasswordResetEmail } from '../firebase';
import './Reset.css';
function Reset() {
    const [email, setEmail] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate('/Home');
    }, [user, loading]);
    return (
        <div className="reset">
            <div className="reset__container">
                <img
                    className="logo-auth"
                    height="60"
                    width="60"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321"
                    alt="Home"
                />

                <h1 className="login__container_welcome">Let's find your Pinterest account</h1>
                <p className="login__container_ideas">What's your email?</p>

                <input
                    type="text"
                    className="reset__textBox "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <button className="reset__btn" onClick={() => sendPasswordResetEmail(auth, email)}>
                    Send password reset email
                </button>
                <div>
                    Don't have an email? <Link to="/register">Register</Link>
                </div>
                <div>
                    Already set new password?<Link to="/">Login</Link>
                </div>
            </div>
        </div>
    );
}
export default Reset;
