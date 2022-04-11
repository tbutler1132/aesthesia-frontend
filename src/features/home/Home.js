import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Aesthesia</h1>
            <Link to="login">Enter</Link>
            {/* <div>Three js</div> */}
        </div>
    );
}

export default Home;