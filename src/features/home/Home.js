import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div>Aesthesia</div>
            <Link to="login">Enter</Link>
            <div>Three js</div>
        </div>
    );
}

export default Home;