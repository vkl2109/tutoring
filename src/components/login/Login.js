import React from 'react';

function Login (props) {
    function handleLogin (e) {
        e.preventDefault();
        
    }
    return (
    <div className="login">
        <form onSubmit = {handleLogin}>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" /> 
            <button type="submit">Login</button>
        </form>
    </div>
    );
}

export default Login;