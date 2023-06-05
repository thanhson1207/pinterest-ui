import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword } from '../firebase';
import './Register.css';
function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const history = useNavigate();
    const register = () => {
        if (!name) alert('Please enter name');
        registerWithEmailAndPassword(name, email, password);
    };
    useEffect(() => {
        if (loading) return;
        if (user) history('/Home', { replace: true });
    }, [user, loading]);
    return (
        <div className="register">
            <div className="register__container">
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
                    className="register__textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    className="register__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="register__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="register__btn" onClick={register}>
                    Register
                </button>
                <div>
                    Already have an account? <Link to="/">Login</Link>
                </div>
            </div>
        </div>
    );
}
export default Register;
