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
                  <p className="card__description">L'histoire suit les aventures de Monkey D. Luffy, un jeune pirate doté de pouvoirs élastiques après avoir mangé un fruit du démon. Avec son équipage, il parcourt le monde à la recherche du trésor légendaire, le "One Piece", pour devenir le Roi des Pirates. Leur voyage les mène à travers de nombreuses îles et à affronter de puissants ennemis.</p>
                </div>
                <a href="/book">
                  <button className="card__button">Read more</button>
                </a>
              </div>
            </article>
            <article className="card">
              <img className="card__background" src="./Dragon_ball_tome_1.jpg" alt="One piece tome 1" width="280" />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">Dragon ball</h2>
                  <p className="card__description">Le manga raconte l'histoire de Son Goku, un garçon doté d'une queue de singe et d'une force incroyable. Il part à la recherche des sept boules de cristal magiques, appelées Dragon Balls, qui, une fois rassemblées, invoquent le dragon Shenron capable d'exaucer n'importe quel vœu. Au fil de son aventure, Goku devient un combattant redoutable, affronte de nombreux adversaires et découvre ses origines extraterrestres.</p>
                </div>
                <a href="">
                  <button className="card__button">Read more</button>
                </a>
              </div>
            </article> 
            <article className="card">
              <img className="card__background" src="./Bleach_tome_1.jpeg" alt="One piece tome 1" width="280" />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">Bleach</h2>
                  <p className="card__description">Ichigo Kurosaki est un adolescent qui a la capacité de voir les esprits. Après une rencontre avec Rukia Kuchiki, une Shinigami (faucheuse d'âmes), ses pouvoirs sont transférés à Ichigo. Il devient alors un Shinigami remplaçant, chargé de protéger les vivants des esprits maléfiques et de guider les âmes défuntes vers l'au-delà. L'histoire suit ses combats contre les Hollows, les âmes perdues, et d'autres forces surnaturelles.</p>
                </div>
                <a href="">
                  <button className="card__button">Read more</button>
                </a>
              </div>
            </article>
            <article className="card">
              <img className="card__background" src="./Naruto_tome_1.jpg" alt="One piece tome 1" width="280" />
              <div className="card__content | flow">
                <div className="card__content--container | flow">
                  <h2 className="card__title">Naruto</h2>
                  <p className="card__description">L'histoire tourne autour de Naruto Uzumaki, un jeune ninja orphelin qui rêve de devenir Hokage, le leader de son village. Rejeté par les habitants à cause du démon renard à neuf queues scellé en lui, Naruto cherche à gagner le respect et l'amour des autres. Tout au long de la série, il fait face à de nombreux défis, se lie d'amitié avec d'autres ninjas et découvre des secrets sur sa famille et son passé.</p>
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
