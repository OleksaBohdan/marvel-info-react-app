import { useState, useEffect, useRef } from 'react';
import './comicsList.scss';
import uw from '../../resources/img/UW.png';

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);

  return (
    <div className="comics__list">
      <ul className="comics__grid">
        <li className="comics__item">
          <a href="#">
            <img src={uw} alt="ultimate war" className="comics__item-img" />
            <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
      </ul>

      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
