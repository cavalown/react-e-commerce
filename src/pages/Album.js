import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const api = `${process.env.REACT_APP_UNSPLASH_API}${process.env.REACT_APP_UNSPLASH_ACCESS}`;

export default function Album(params) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${api}&query=car`);
      const results = response.data;
      setPhotos(results);
    })();
  }, []);

  return (
    <div className="row">
      <div className="col-4">
        <ul>
          {photos.map((photo) => {
            return <li key={photo.id}>{photo.id}</li>;
          })}
        </ul>
      </div>
      <div className="col-8">
        <Outlet context={photos}/>
      </div>
    </div>
  );
}
