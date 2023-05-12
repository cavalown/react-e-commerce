import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import {
  Home,
  About,
  Album,
  AlbumPhoto,
  AlbumIndex,
  AlbumSearch,
  NotFound,
} from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/album" element={<Album />}>
            <Route index element={<AlbumIndex />}></Route>
            <Route path="search" element={<AlbumSearch />}></Route>
            <Route path=":id" element={<AlbumPhoto />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
