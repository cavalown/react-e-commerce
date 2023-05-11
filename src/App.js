import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Album from './pages/Album';
import AlbumPhoto from './pages/AlbumPhoto';
import AlbumIndex from './pages/AlbumIndex';
import AlbumSearch from './pages/AlbumSearch';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/album" element={<Album/>}>
            <Route index element={<AlbumIndex/>}></Route>
            <Route path="search" element={<AlbumSearch/>}></Route>
            <Route path=":id" element={<AlbumPhoto/>}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
