import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Login.css';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate('/Home');
    }, [user, loading]);
    return (
        <div className="login-box">
            <div className="login-intro">
                <h2 className="login-ideas">Sign in to get your ideas</h2>
            </div>

            <div className="login">
                <div className="login__container">
                    <img
                        className="logo-auth"
                        height="60"
                        width="60"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png?20160129083321"
                        alt="Home"
                    />

                    <h1 className="login__container_welcome">Welcome to Pinterest</h1>
                    <p className="login__container_ideas">Find new ideas to try</p>

                    <input
                        type="text"
                        className="login__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        className="login__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button className="login__btn" onClick={() => signInWithEmailAndPassword(auth, email, password)}>
                        Login
                    </button>
                    <div>
                        <Link to="/reset">Forgot your password?</Link>
                    </div>
                    <div>
                        Not on Pinterest yet? <Link to="/register">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
