import React from 'react';
import logo from './assets/logo.svg';
import plastika1 from './assets/plastika1.svg';
import plastika2 from './assets/plastika2.svg';
import plastika3 from './assets/plastika3.svg';
import plastika4 from './assets/plastika4.svg';
import slika1 from './assets/slika1.jpg';


function App() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="#pocetna">Početna</a></li>
          <li><a href="#proizvodi">Proizvodi</a></li>
          <li><a href="#onama">O nama</a></li>
          <li><a href="#kontakt">Kontakt</a></li>
        </ul>
      </nav>
      <div className="content">


      <div className="horizontal-bar">
          <div className="image-box">
          <img src={plastika1} alt="Slika 1" />
          </div>
          <div className="image-box">
          <img src={plastika2} alt="Slika 2" />
          </div>
          <div className="image-box">
          <img src={plastika3} alt="Slika 3" />
          </div>
          <div className="image-box">
          <img src={plastika4} alt="Slika 4" />
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

   
    </>
  );
}

export default App;