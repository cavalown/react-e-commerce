import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import List from '../components/List';

const api = 'https://api.unsplash.com/search/photos/';
const accseeId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function Album(params) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${api}?client_id=${accseeId}&query=car`
      );
      const { results } = response.data;
      setPhotos(results);
    })();
  }, []);

  return (
    <div className="row">
      <div className="col-4">
        <Link to="search">搜尋圖片</Link>
        {/* <ul>
          {photos.map((photo) => {
            return <li key={photo.id}><Link to={photo.id}>{photo.id}</Link></li>;
          })}
        </ul> */}
        <List items={photos} />
      </div>
      <div className="col-8">
        <Outlet context={photos} />
      </div>
    </div>
  );
}
