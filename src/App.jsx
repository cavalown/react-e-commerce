import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Products from "./components/Products"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container mt-4">
        {/* 外層隔線 */}
        <div className="row">
          {/* left */}
          <div className="col-md-7">
            {/* 內層隔線 */}
            <Products></Products>
          </div>
          {/* right */}
          <div className="col-md-5">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
