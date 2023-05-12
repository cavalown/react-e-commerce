import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const api = 'https://api.unsplash.com/photos/';
const accseeId = process.env.REACT_APP_UNSPLASH_ACCESS;

export default function AlbumPhoto(params) {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await axios.get(`${api}/${id}?client_id=${accseeId}`);
      setPhoto(response.data);
    })();
  }, [id]);
  return (
    <div className="">
      <button type="button" onClick={()=>{navigate(-1)}}>回到上一頁</button>
      <p>{id}</p>
      <p>{photo.description}</p>
      <img src={photo?.urls?.regular} alt="" className="img-fluid" />
    </div>
  );
}
