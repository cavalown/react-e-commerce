import { useReducer } from "react"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import {CartContext} from './store'

function App() {
  const carReducer = useReducer((state, action)=>{
    console.log('state:', state);
    console.log('action:', action);
    switch(action) {
      default:
        return state 
    }
  },{
    cartList: []
  })
  return (
    <CartContext.Provider value={carReducer}>
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
    </CartContext.Provider>
  )
}

export default App
