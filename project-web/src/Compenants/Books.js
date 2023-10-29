import React from 'react';
import './css/Books.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useQuery, gql } from '@apollo/client';

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

export default function Books() {
  const { loading, error, data } = useQuery(GET_MANGAS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navbar />
      <h2 className="titre">Nouveautés</h2>
      <div className="container">
        <div className="row">
          {data.Page.media.map(manga => (
            <article key={manga.id} className="card">
              <img className="card__background" src={manga.coverImage.large} alt={manga.title.english || manga.title.native} width="280" />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">{manga.title.english || manga.title.native}</h2>
                  <p className="card__description">{manga.description}</p>
                </div>
                <a href="/book">
                  <button className="card__button">Read more</button>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
