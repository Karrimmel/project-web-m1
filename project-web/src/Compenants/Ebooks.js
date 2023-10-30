import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/Ebooks.css';

const GET_GENRES = gql`
  query GetGenres {
    GenreCollection
  }
`;

const GET_MANGAS = gql`
  query GetMangas {
    Page(page: 1, perPage: 21) {
      media(type: MANGA) {
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
  const { loading: loadingGenres, error: errorGenres, data: dataGenres } = useQuery(GET_GENRES);
  const { loading: loadingMangas, error: errorMangas, data: dataMangas } = useQuery(GET_MANGAS);

  if (loadingGenres || loadingMangas) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p className="loading-message">Chargement des données...</p>
      </div>
  );
}

  if (errorGenres || errorMangas) return <p>Error: {(errorGenres || errorMangas).message}</p>;

  return (
    <div>
        <Navbar />
        <div className="containerEbooks">
                <div className="filters">
                    <ul className="genre">
                        <h3>Genres</h3>
                        <div className="list">
                            <li>Tous</li>
                            {dataGenres.GenreCollection.map((genre, index) => (
                              <div className="list" key={index}>
                                <li>{genre}</li>
                              </div>
                            ))}
                        </div>
                    </ul>
                </div>
                <div className="eBooks">
                    {dataMangas.Page.media.map((manga) => (
                        <div className="Book" key={manga.id}>                         
                                <img src={manga.coverImage.large} alt={manga.title.userPreferred} />
                        </div>
                    ))}
                </div>
        </div>
        <Footer />
    </div>
  );
}