import './Style/header.css';

function Header(){
    return (
        <>
        <header className="header">
        <div className="header-up">
            <h1 className="logo">
                Family Wellness
            </h1>
            <p className="logo-para">
                MASSAGE THERAPY
            </p>
        </div>
        <nav className="nav">
            <a href="#">HOME</a>
            <a href="y.html">ABOUT</a>
            <a href="y.html">SERVICES</a>
            <a href="y.html">FAQ</a>
            <a href="y.html">CONTACT</a>
        </nav>
        </header>
        
        </>
    );
}

export default Header;
