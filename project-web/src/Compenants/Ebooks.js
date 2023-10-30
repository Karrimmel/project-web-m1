import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/Ebooks.css';

const GET_GENRES = gql`
  query GetGenres {
    GenreCollection
  }
`;

const GET_MANGAS_BY_GENRE = gql`
  query GetMangasByGenre($genre: String) {
    Page(page: 1, perPage: 21) {
      media(type: MANGA, genre: $genre) {
        id
        title {
          userPreferred
        }
        coverImage {
          large
        }
      }
    }
  }
`;

export default function Ebooks() {
  const [selectedGenre, setSelectedGenre] = useState('ALL'); // Utilisez 'ALL' pour indiquer tous les genres
  const { loading: loadingGenres, error: errorGenres, data: dataGenres } = useQuery(GET_GENRES);
  const { loading: loadingMangas, error: errorMangas, data: dataMangas } = useQuery(GET_MANGAS_BY_GENRE, {
    variables: { genre: selectedGenre === 'ALL' ? null : selectedGenre },
  });

  if (loadingGenres || loadingMangas) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p className="loading-message">Chargement des données...</p>
      </div>
    );
  }

  if (errorGenres || errorMangas) return <p>Error: {(errorGenres || errorMangas).message}</p>;

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
        <Navbar />
        <div className="containerEbooks">
            <div className="filters">
                <ul className="genre">
                    <h3>Genres</h3>
                    <div className="list">
                        <li><Link to="/e_book" onClick={() => handleGenreClick('ALL')}>Tous</Link></li>
                        {dataGenres && dataGenres.GenreCollection.map((genre, index) => (
                          <div className="list" key={index}>
                            <li>
                              <Link to={`/e_book/genre/${genre}`} onClick={() => handleGenreClick(genre)}>
                                {genre}
                              </Link>
                            </li>
                          </div>
                        ))}
                    </div>
                </ul>
            </div>
            <div className="eBooks">
              {loadingMangas && <p>Loading mangas...</p>}
              {errorMangas && <p>Error loading mangas: {errorMangas.message}</p>}
              {dataMangas && dataMangas.Page.media.map((manga) => (
                  <div className="Book" key={manga.id}>
                      <Link to={`/book/${manga.id}`}>
                          <img src={manga.coverImage.large} alt={manga.title.userPreferred} />
                      </Link>
                  </div>
              ))}
          </div>
        </div>
        <Footer />
    </div>
  );
}