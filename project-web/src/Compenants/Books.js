import React from 'react';
import './css/Books.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

// GraphQL query to fetch a list of mangas
const GET_MANGAS = gql`
  query {
    Page(page: 1, perPage: 4) {
      media(type: MANGA) {
        id
        title {
          english
          native
        }
        description
        coverImage {
          large
        }
      }
    }
  }
`;

// GraphQL query to fetch a list of best-rated mangas
const GET_BEST_MANGA = gql`
  query {
    Page(page: 1, perPage: 4) {
      media(type: MANGA, sort: SCORE_DESC) {
        id
        title {
          english
          native
        }
        averageScore
        description
        coverImage {
          large
        }
      }
    }
  }
`;

/**
 * Books component displays lists of new and best-rated mangas.
 */
export default function Books() {
  // Hooks to execute the GraphQL queries and manage their state
  const { loading: loadingMangas, error: errorMangas, data: dataMangas } = useQuery(GET_MANGAS);
  const { loading: loadingBest, error: errorBest, data: dataBest } = useQuery(GET_BEST_MANGA);

  // Display a loading spinner and message while data is being fetched
  if (loadingMangas || loadingBest) { 
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p className="loading-message">Loadgin...</p>
      </div>
    );
  }

  // Display an error message if there is an issue fetching data
  if (errorMangas || errorBest) return <p>Error: {(errorMangas || errorBest).message}</p>;

  return (
    <div>
      <Navbar />
      <h2 className="titre">Nouveautés</h2>
      <div className="container">
        <div className="row">
          {/* Map through the list of mangas and display their information */}
          {dataMangas.Page.media.map(manga => (
            <article key={manga.id} className="card">
              <img className="card__background" src={manga.coverImage.large} alt={manga.title.english || manga.title.native} width="280" />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">{manga.title.english || manga.title.native}</h2>
                  <p className="card__description">{manga.description}</p>
                </div>
                {/* Link to the detailed page of the manga */}
                <Link to={`/book/${manga.id}`}>
                  <button className="card__button">Read more</button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <h2 className="titre">Mieux Notés</h2> 
      <div className="container">
        <div className="row">
          {/* Map through the list of best-rated mangas and display their information */}
          {dataBest.Page.media.map(manga => (
            <article key={manga.id} className="card">
              <img className="card__background" src={manga.coverImage.large} alt={manga.title.english || manga.title.native} width="280" />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">{manga.title.english || manga.title.native}</h2>
                  <p className="card__description">{manga.description}</p>
                </div>
                {/* Link to the detailed page of the manga */}
                <Link to={`/book/${manga.id}`}>
                  <button className="card__button">Read more</button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}