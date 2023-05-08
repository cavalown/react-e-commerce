import { useOutletContext } from 'react-router-dom';

export default function AlbumPhoto(params) {
  const photos = useOutletContext();
  console.log('photos:', photos);
  return (
    <div className="">
        這是相簿的首頁
      {photos.map((photo) => {
        return <li key={photo.id}>{photo.id}</li>;
      })}
    </div>
  );
}
