import React from 'react';
import './css/Books.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

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

export default function Books() {
  const { loading: loadingMangas, error: errorMangas, data: dataMangas } = useQuery(GET_MANGAS);
  const { loading: loadingBest, error: errorBest, data: dataBest } = useQuery(GET_BEST_MANGA);

  if (loadingMangas || loadingBest) { 
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p className="loading-message">Chargement des données...</p>
      </div>
  );
}

  if (errorMangas || errorBest) return <p>Error: {(errorMangas || errorBest).message}</p>;

  return (
    <div>
      <Navbar />
      <h2 className="titre">Nouveautés</h2>
      <div className="container">
        <div className="row">
          {dataMangas.Page.media.map(manga => (
            <article key={manga.id} className="card">
              <img className="card__background" src={manga.coverImage.large} alt={manga.title.english || manga.title.native} width="280" />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">{manga.title.english || manga.title.native}</h2>
                  <p className="card__description">{manga.description}</p>
                </div>
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
          {dataBest.Page.media.map(manga => (
            <article key={manga.id} className="card">
              <img className="card__background" src={manga.coverImage.large} alt={manga.title.english || manga.title.native} width="280" />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">{manga.title.english || manga.title.native}</h2>
                  <p className="card__description">{manga.description}</p>
                </div>
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
