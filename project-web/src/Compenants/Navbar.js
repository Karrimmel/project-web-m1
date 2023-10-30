import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

/**
 * Navbar component represents the navigation bar at the top of the page.
 * It provides links to different sections of the website and includes a search bar.
 */
export default function Navbar() {
  return (
    <div>
        <nav>
            <div className="logo">
                {/* Link to the home page */}
                <Link to="/">
                    <img src="/Logo_Solution_Factory_2.png" alt="Logo La l'e-brairie" width="100" height="100" />
                </Link>
            </div>

            <div className="search-bar">
                {/* Search form */}
                <form action="" method="GET">
                    <input type="text" id="bookTitle" name="bookTitle" placeholder="Titre du livre" />
                    <button type="submit" className="search-icon">
                        <img src="/search-icon.png" alt="search" width="20" height="20" />
                    </button>
                </form>
            </div>
            <ol>
                {/* Navigation links */}
                <li><Link className="titre" to="/e_book">E-book</Link></li>
                <li><Link className="titre" to="/e_book">Ouvrage papier</Link></li>
                <div className="profile-menu">
                    <li><img src="/user.png" className="profile-icon" alt="profil" /></li>
                    <div className="menu">
                        {/* Links to account creation and login pages */}
                        <Link to="/register">Se créer un compte</Link>
                        <Link to="/login">Se connecter</Link>      
                    </div>
                </div>
            </ol>
        </nav>
    </div>
  )
}
