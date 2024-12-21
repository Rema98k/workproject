import React from 'react';
import './styles.css'; // Već koristiš isti CSS fajl za stilizaciju
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom'; 




function about() {
  return (
    <div className="about-page">
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
      <div className="about-content">
        <div className="text-section">
          <h1>Peulla d.o.o.</h1>
          <p>
            Peulla d.o.o. je kompanija sa dugogodišnjom tradicijom u izradi plastičnih proizvoda visokog kvaliteta. Naša misija je pružiti inovativna i pouzdana rešenja koja zadovoljavaju potrebe naših klijenata, uz poseban fokus na preciznost, izdržljivost i ekološku održivost.
          </p>
          <p>
            Sedište kompanije nalazi se u Beogradu, odakle uspešno poslujemo i sarađujemo s partnerima širom zemlje i regiona. Naš cilj je kontinuirano unapređivanje kvaliteta i tehnologije kako bismo osigurali zadovoljstvo svih koji koriste naše proizvode.
          </p>
        </div>
        <div className="image-section">

        </div>
      </div>
    </div>
  );
}

export default about;