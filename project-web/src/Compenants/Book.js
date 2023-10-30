import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useQuery, gql } from '@apollo/client';


const GET_MANGA_DETAILS = gql`
  query GetMangaDetails($id: Int) { # Assurez-vous que le type de l'ID correspond à celui attendu par l'API
    Media(id: $id, type: MANGA) {
      id
      title {
        english
        native
      }
      description(asHtml: false) # Mettez asHtml à true si vous voulez la description en HTML
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  const manga = data.Media;

  return (
    <div>
        <Navbar />
        <div class="container">
            <div class="Book">
                <img src={manga.coverImage.extraLarge} alt={`Cover of ${manga.title.english}`}/>
            </div>
            <div>
                <div class="Name">
                    <div>
                        <div class="title-and-author">
                            <p class="title">{manga.title.english || manga.title.native}</p>
                            <p class="author"></p>
                        </div>
                        <div class="rating">
                            <p class="note">Note : {manga.averageScore}</p>
                        </div>
                    </div>
                </div>
                <div class="resume">
                    <p>{manga.description}</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}