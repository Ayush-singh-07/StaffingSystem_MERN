import React from "react";


function Nav(){
    return(
        <div>
                <nav className="pa3 pa4-ns">
                <a className="link dim black b f6 f5-ns dib mr3" href="#" title="Home">Welcome</a>
                <a className="link dim gray    f6 f5-ns dib mr3" href="/" title="Home">Home</a>
                <a className="link dim gray    f6 f5-ns dib mr3" href="/dashboard" title="dashboard">Dashboard</a>
                </nav>
        </div>
    )
}

export default Nav;