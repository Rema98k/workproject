import React from 'react';
import logo from './assets/logo.svg';
import x from './assets/x.svg';
import slika1 from './assets/slika2.jpg'
import slika2 from './assets/slika3.jpg'
import slika3 from './assets/slika4.jpg'
import slika4 from './assets/slika5.jpg'
import slika5 from './assets/slika6.jpg'
import slika6 from './assets/slika7.jpg'
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import youtube from './assets/youtube.svg';

import { Link } from 'react-router-dom'; 


const Proizvodi: React.FC = () => {
    return(
        <>
        <div className="header">

            <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-links">
                <li><Link to="/">Početna</Link></li>
                <li><Link to="/o-nama">O nama</Link></li>
                <li><Link to="/proizvodi">Proizvodi</Link></li>
                <li><a href="#kontakt">Kontakt</a></li>   {/* Ostaje jer je hash navigacija */}
                <li><Link to="/registracija">Registracija</Link></li> {/* React Router navigacija */}
            </ul>
            </nav>


        </div>

        <div className="Parent-proizvodi-content">
          <div className="proizvodi-content">
            <div className="proizvod">
                <img className="proizvodi-slika" src={slika1} loading="lazy" alt="slika1"></img>
                <p className="proizvodi-tekst">PVC izolacioni materijali</p>
            </div>
            <div className="proizvod">
                <img className="proizvodi-slika" src={slika2} loading="lazy" alt="slika2"></img>
                <p className="proizvodi-tekst">Oprema za kupatilo</p>
            </div>
            <div className="proizvod">
                <img className="proizvodi-slika" src={slika3} loading="lazy" alt="slika3"></img>
                <p className="proizvodi-tekst">Posude</p>
            </div>
            <div className="proizvod">
                <img className="proizvodi-slika" src={slika4} loading="lazy" alt="slika4"></img>
                <p className="proizvodi-tekst">Plasticni delovi</p>
            </div>

            <div className="proizvod">
                <img className="proizvodi-slika" src={slika5} loading="lazy" alt="slika5"></img>
                <p className="proizvodi-tekst">Vrste cevi</p>
            </div>
            <div className="proizvod">
                <img className="proizvodi-slika" src={slika6} loading="lazy" alt="slika6"></img>
                <p className="proizvodi-tekst">Ostali proizvodi</p>
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

export default Proizvodi;