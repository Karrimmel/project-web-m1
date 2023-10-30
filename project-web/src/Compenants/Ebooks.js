/**
 * Ebooks component displays a list of manga genres and manga covers.
 * It allows users to filter mangas by genre.
 */
export default function Ebooks() {
  // State to keep track of the selected genre for filtering
  const [selectedGenre, setSelectedGenre] = useState('ALL');

  // GraphQL queries to fetch genres and mangas by genre
  const { loading: loadingGenres, error: errorGenres, data: dataGenres } = useQuery(GET_GENRES);
  const { loading: loadingMangas, error: errorMangas, data: dataMangas } = useQuery(GET_MANGAS_BY_GENRE, {
    variables: { genre: selectedGenre === 'ALL' ? null : selectedGenre },
  });

  // Display a loading spinner and message while data is being fetched
  if (loadingGenres || loadingMangas) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
        <p className="loading-message">Chargement des données...</p>
      </div>
    );
  }

  // Display an error message if there is an issue fetching data
  if (errorGenres || errorMangas) return <p>Error: {(errorGenres || errorMangas).message}</p>;

  /**
   * Handles clicks on genre filters.
   * @param {string} genre - The genre to filter by.
   */
  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  // Filter out any unwanted genres such as 'Hentai' and 'Ecchi'
  const filteredGenres = dataGenres ? dataGenres.GenreCollection.filter(
    (genre) => genre !== 'Hentai' && genre !== 'Ecchi'
  ) : [];

  return (
    <div>
        <Navbar />
        <div className="containerEbooks">
            <div className="filters">
                <ul className="genre">
                    <h3>Genres</h3>
                    <div className="list">
                        {/* Clicking 'Tous' resets the genre filter */}
                        <li><Link to="/e_book" onClick={() => handleGenreClick('ALL')}>Tous</Link></li>
                        {/* Map through the filtered genres to display genre links */}
                        {filteredGenres.map((genre, index) => (
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
              {/* Display a loading message for mangas if they are being fetched */}
              {loadingMangas && <p>Loading mangas...</p>}
              {/* Display an error message if there is an issue fetching mangas */}
              {errorMangas && <p>Error loading mangas: {errorMangas.message}</p>}
              {/* Map through the fetched mangas and display their covers */}
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
