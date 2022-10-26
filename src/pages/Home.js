import React, { useState } from 'react';
import Login from '../components/login/Login';

function HomePage () {
    const [isLogged, setIsLogged] = useState(false);

    return (
    <div>
        <h1>HomePage</h1>
        {!isLogged && <Login setIsLogged = {setIsLogged}/>}
    </div>
    );
}

export default HomePage;