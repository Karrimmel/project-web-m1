import React from 'react';
import './css/Books.css';
import Navbar from './Navbar';
import Footer from'./Footer';

export default  function Books() {
  return (
    <div>
      <Navbar />
      <h2 className="titre">Nouveautés</h2>
      <div className="container">
        <div className="row">        
            <article className="card">
              <img className="card__background" src="./One_piece_tome_1.jpg" alt="One piece tome 1" width="280" />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">One piece</h2>
                  <p className="card__description"></p>
                </div>
                <a href="/book">
                  <button className="card__button">Read more</button>
                </a>
              </div>
            </article>
            <article className="card">
              <img className="card__background" src="./One_piece_tome_1.jpg" alt="One piece tome 1" width="280" />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">One piece</h2>
                  <p className="card__description"></p>
                </div>
                <a href="">
                  <button className="card__button">Read more</button>
                </a>
              </div>
            </article>                      
        </div>
      </div>
      <Footer />
    </div>
  );
}
