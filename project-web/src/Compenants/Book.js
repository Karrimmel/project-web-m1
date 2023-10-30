import React from 'react';
import './css/Book.css';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useQuery, gql } from '@apollo/client';

// GraphQL query to fetch details of a specific manga by its ID
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

/**
 * Book component displays the details of a specific manga.
 */
export default function Book() {
  // Extract the manga ID from the URL parameters
  let { id } = useParams();

  // Convert the ID from string to integer
  const mangaId = parseInt(id);

  // Execute the GraphQL query with the manga ID as a variable
  const { loading, error, data } = useQuery(GET_MANGA_DETAILS, {
    variables: { id: mangaId },
  });

  // Display a loading spinner and message while data is being fetched
  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p className="loading-message">Loading...</p>
      </div>
    );
  }

  // Display an error message if there is an issue fetching data
  if (error) return <p>Error: {error.message}</p>;

  // Extract the manga data from the query result
  const manga = data.Media;

  return (
    <div>
        <Navbar />
        <div className="containerBook">
            <div className="Book">
                {/* Display the cover image of the manga */}
                <img src={manga.coverImage.extraLarge} alt={`Cover of ${manga.title.english}`}/>
            </div>
            <div>
                <div className="Name">
                    <div>
                        <div className="title-and-author">
                            {/* Display the title of the manga */}
                            <p className="title">{manga.title.english || manga.title.native}</p>
                            {/* Author information could be added here */}
                            <p className="author"></p>
                        </div>
                        <div className="rating">
                            {/* Display the average score of the manga */}
                            <p className="note">Note : {manga.averageScore}/100</p>
                        </div>
                    </div>
                </div>
                <div className="resume">
                    {/* Display the description of the manga */}
                    <p>{manga.description}</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}