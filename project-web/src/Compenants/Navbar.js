import React from 'react'
import './css/Navbar.css';

export default function Navbar() {
  return (
    <div>
        <nav>
            <div className="logo">
                <a href="/">
                    <img src="./Logo_Solution_Factory_2.png" alt="Logo La l'e-brairie" width="100" height="100" />
                </a>
            </div>

            <div className="search-bar">
                <form action="" method="GET">
                    <input type="text" id="bookTitle" name="bookTitle" placeholder="Titre du livre" />
                    <button type="submit" className="search-icon">
                        <img src="search-icon.png" alt="search" width="20" height="20" />
                    </button>
                </form>
            </div>
            <ol>
                <li><a className="titre" href="/">E-book</a></li>
                <li><a className="titre" href="/">Ouvrage papier</a></li>
                <div className="profile-menu">
                    <li><img src="user.png" className="profile-icon" alt="profil" /></li>
                    <div class="menu">
                        <a href="register" >Se créer un compte</a>
                        <a href="login">Se connecter</a>      
                    </div>
                </div>
            </ol>
        </nav>
    </div>
  )
}