class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=e38c7b67df85bfebb1ee9845548df172';

  gerResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () => {
    return this.gerResource(`${this._apiBase}/characters?limit=9&offset=210&${this._apiKey}`);
  };

  getCharacter = (id) => {
    return this.gerResource(`${this._apiBase}/characters/${id}?${this._apiKey}`);
  };
}

export default MarvelService;
