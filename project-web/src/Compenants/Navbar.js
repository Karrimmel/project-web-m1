import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLazyQuery, gql } from '@apollo/client';
import './css/Navbar.css';

// GraphQL query to search for a manga by title
const SEARCH_MANGA = gql`
  query SearchManga($title: String) {
    Page(page: 1, perPage: 1) {
      media(search: $title, type: MANGA) {
        id
      }
    }
  }
`;

/**
 * Navbar component represents the navigation bar at the top of the page.
 * It provides links to different sections of the website and includes a search bar.
 */
export default function Navbar() {
  // State to hold the search input value
  const [search, setSearch] = useState('');
  // Hook to navigate programmatically
  const navigate = useNavigate();
  // Lazy query hook for searching manga, which will be triggered on form submit
  const [searchManga, { data, loading, error }] = useLazyQuery(SEARCH_MANGA);

  // Function to update the search state as the user types
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Function to handle the search form submission
  const handleSearchSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Do nothing if the search input is empty
    if (!search.trim()) return;

    try {
      // Execute the search query with the current search state value
      const result = await searchManga({ variables: { title: search } });
      // Extract the first manga from the search results
      const manga = result.data.Page.media[0];
      // If a manga is found, navigate to its detail page
      if (manga) {
        navigate(`/book/${manga.id}`);
      } else {
        // Log a message if no manga is found (could also display a message to the user)
        console.log('No manga found with that title.');
      }
    } catch (error) {
      // Log an error if the search fails (could also display an error message to the user)
      console.error('Search error:', error);
    }
  };

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
                {/* Search form that calls handleSearchSubmit on submit */}
                <form onSubmit={handleSearchSubmit}>
                    {/* Input field for the search term, with value bound to the search state */}
                    <input
                      type="text"
                      id="bookTitle"
                      name="bookTitle"
                      placeholder="Titre du livre"
                      value={search}
                      onChange={handleSearchChange}
                    />
                    {/* Submit button for the search form */}
                    <button type="submit" className="search-icon">
                        <img src="/search-icon.png" alt="search" width="20" height="20" />
                    </button>
                </form>
            </div>
            <ol>
              {/* Navigation links */}
              <li><Link className="titre" to="/e_book">E-book</Link></li>
              <li><Link className="titre" to="/e_book">Paper Trade</Link></li>
              <div className="profile-menu">
                  <li><img src="/user.png" className="profile-icon" alt="profil" /></li>
                  <div className="menu">
                      {/* Links to account creation and login pages */}
                      <Link to="/Login">Sign in</Link>
                      <Link to="/">Sign on</Link>      
                  </div>
              </div>
          </ol>
      </nav>
  </div>
  )
}
