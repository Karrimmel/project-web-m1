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

export default function Ebooks() {
  const { loading, error, data } = useQuery(GET_GENRES);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p className="loading-message">Chargement des données...</p>
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        <Navbar />
        <div className="containerEbooks">
                <div className="filters">
                    <ul className="genre">
                        <h3>Genres</h3>
                        <div className="list">
                            <li>Tous</li>
                            {data.GenreCollection.map((genre, index) => (
                              <div className="list" key={index}>
                                <li>{genre}</li>
                              </div>
                            ))}
                        </div>
                    </ul>
                </div>
                <div className="eBooks">
                </div>
        </div>
        <Footer />
    </div>
  );
}