import React from 'react';
import logo from './assets/logo.svg';
import plastika1 from './assets/plastika1.svg';
import plastika2 from './assets/plastika2.svg';
import plastika3 from './assets/plastika3.svg';
import plastika4 from './assets/plastika4.svg';
import slika1 from './assets/slika1.jpg';
import x from './assets/x.svg';
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import youtube from './assets/youtube.svg';
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <img src={logo} alt="Logo" className="logo" />
          <ul className="nav-links">
              <li><Link to="/">Početna</Link></li>
              <li><Link to="/o-nama">O nama</Link></li>
              <li><a href="#proizvodi">Proizvodi</a></li> {/* Ovo može ostati jer vodi na isti element */}
              <li><a href="#kontakt">Kontakt</a></li>   {/* Ostaje jer je hash navigacija */}
              <li><Link to="/registracija">Registracija</Link></li> {/* React Router navigacija */}
          </ul>
        </nav>

        <div className="content">
          <div className="horizontal-bar">
            <div className="image-box"><img src={plastika1} alt="Slika 1" /></div>
            <div className="image-box"><img src={plastika2} alt="Slika 2" /></div>
            <div className="image-box"><img src={plastika3} alt="Slika 3" /></div>
            <div className="image-box"><img src={plastika4} alt="Slika 4" /></div>
          </div>
        </div>

        <div id="text-image-section" className="text-image-section">
          <div className="text-content">
            <h1>Izrada kvalitetnih plastičnih proizvoda</h1>
            <p>Mi smo firma specijalizovana za izradu visokokvalitetnih plastičnih proizvoda koji zadovoljavaju sve vaše potrebe.</p>
          </div>
          <div className="image-content">
            <img src={slika1} alt="Proizvod" />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="social-links">
          <a href="https://x.com" target="_blank" rel="noopener noreferrer"><img src={x} alt="x" /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="Facebook" /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" /></a>
        </div>
        <p>© 2024 Peulla d.o.o. </p>
      </footer>
    </>
  );
}

export default Home;
