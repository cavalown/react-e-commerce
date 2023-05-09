import { useOutletContext, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const api = 'https://api.unsplash.com/photos/';
const accseeId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumPhoto(params) {
  const photos = useOutletContext();
  const { id } = useParams();
  const [photo, setPhoto] = useState({});
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${api}/${id}?client_id=${accseeId}`);
      setPhoto(response.data);
      console.log('photo:', photo);
    })();
  }, [id]);
  return (
    <div className="">
      這是相簿的首頁
      <p>{id}</p>
      <p>{photo.description}</p>
      <img src={photo?.urls?.regular} alt="" className="img-fluid" />
    </div>
  );
}
