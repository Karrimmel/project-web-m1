import React from 'react';
import './css/Book.css';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useQuery, gql } from '@apollo/client';


const GET_MANGA_DETAILS = gql`
  query GetMangaDetails($id: Int) { 
    Media(id: $id, type: MANGA) {
      id
      title {
        english
        native
      }
      description(asHtml: false) 
      coverImage {
        extraLarge
      }
      averageScore
    }
  }
`;

export default function Book() {
  let { id } = useParams();


  const mangaId = parseInt(id);


  const { loading, error, data } = useQuery(GET_MANGA_DETAILS, {
    variables: { id: mangaId },
  });

  if (loading) return <div className="spinner-container"><div className="spinner"></div></div>;
  if (error) return <p>Error: {error.message}</p>;


  const manga = data.Media;

  return (
    <div>
        <Navbar />
        <div className="containerBook">
            <div className="Book">
                <img src={manga.coverImage.extraLarge} alt={`Cover of ${manga.title.english}`}/>
            </div>
            <div>
                <div className="Name">
                    <div>
                        <div className="title-and-author">
                            <p className="title">{manga.title.english || manga.title.native}</p>
                            <p className="author"></p>
                        </div>
                        <div className="rating">
                            <p className="note">Note : {manga.averageScore}/100</p>
                        </div>
                    </div>
                </div>
                <div className="resume">
                    <p>{manga.description}</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}