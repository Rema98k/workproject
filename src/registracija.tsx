import React, { useState } from "react";
import './styles.css'; // Već koristiš isti CSS fajl za stilizaciju
import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Registracija() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State za prikazivanje kalkulatora
  const [showCalculator, setShowCalculator] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Slanje podataka na server
    axios.post('https://your-api-endpoint.com/api/register', formData)
      .then((response) => {
        console.log("User registered successfully:", response.data);
        // Možeš da redirektuješ korisnika na login stranicu ili na neku drugu stranicu
      })
      .catch((error) => {
        console.error("Error registering user:", error);
      });
  };

  // Funkcija za promenu stanja kalkulatora
  const toggleCalculator = () => {
    setShowCalculator((prev) => !prev);
  };

  return (
    <div className="about-page">
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

      <div className='Parent-text-registracija'>
          <div className="text-Registracija">
            <h1>Registrujte se da biste ostvarili popust na proizvode!</h1>
            
          </div>
        <div className="image-section"></div>
      </div>

      <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
        <h2>Registracija</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Korisničko ime:
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Lozinka:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
            </label>
          </div>
          <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
            Registruj se
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registracija;
