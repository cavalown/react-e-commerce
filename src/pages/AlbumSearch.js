import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import List from '../components/List';

const api = 'https://api.unsplash.com/search/photos/';
const accseeId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumSearch(params) {
  const [search, setSearch] = useState('');
  const [photos, setPhotos] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (search !== '') {
      (async () => {
        const response = await axios.get(
          `${api}?client_id=${accseeId}&query=${search}`
        );
        const { results } = response.data;
        setPhotos(results);
      })();
    }
  }, [search]);
  useEffect(() => {
    setSearch(searchParams.get('query'));
  }, [searchParams]);
  return (
    <div className="">
      <div className="">這是圖片搜尋頁</div>
      <input
        type="text"
        className="form-controll"
        defaultValue={search}
        onKeyUp={(e) => {
          if (e.code === 'Enter') {
            setSearchParams({ query: e.target.value });
          }
        }}
      />
      {/* <ul>
        {photos.map((photo) => {
          return (
            <li key={photo.id}>
              <Link to={`/album/${photo.id}`}>{photo.id}</Link>
            </li>
          );
        })}
      </ul> */}
      <List items={photos} />
    </div>
  );
}
