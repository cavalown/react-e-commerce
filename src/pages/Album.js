import { Outlet, Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const api = 'https://api.unsplash.com/photos/';
const accseeId = process.env.REACT_APP_UNSPLASH_ACCESS

export default function Album(params) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${api}?client_id=${accseeId}&query=car`);
      const results = response.data;
      setPhotos(results);
    })();
  }, []);

  return (
    <div className="row">
      <div className="col-4">
        <ul>
          {photos.map((photo) => {
            return <li key={photo.id}><Link to={photo.id}>{photo.id}</Link></li>;
          })}
        </ul>
      </div>
      <div className="col-8">
        <Outlet context={photos}/>
      </div>
    </div>
  );
}
