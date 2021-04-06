import React from 'react';

function Hero ({handleLogout}) {
    window.analytics.page('Home Page');
    
    return (
        <section className="hero">
            <nav>
            <h2>Welcome</h2>
            <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero;