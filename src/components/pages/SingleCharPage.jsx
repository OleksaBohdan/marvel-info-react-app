import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './singleCharPage.scss';
import useMarvelService from '../../services/MarvelService';

const SingleCharPage = () => {
  const { charId } = useParams();
  const [char, setChar] = useState(null);
  const { loading, error, getCharacter, clearError } = useMarvelService();

  console.log('charId', charId);

  useEffect(() => {
    updateChar();
  }, [charId]);

  const updateChar = () => {
    clearError();

    getCharacter(charId).then(onCharLoaded);
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ char }) => {
  const { description, thumbnail, name } = char;

  return (
    <div className="single-comic">
      <img src={thumbnail} alt={name} className="single-comic__char-img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{name}</h2>
        <p className="single-comic__descr">{description}</p>
      </div>
    </div>
  );
};

export default SingleCharPage;
