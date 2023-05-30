import { Routes, Route } from "react-router"; 

import Home from "./component/Home";
import  Product from "./component/Product";
import  Account from "./component/Account";
import  Cart from "./component/Cart";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import reducer from "./service/Reducer";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware,compose } from "redux";
import { Provider } from "react-redux";
function App() {
  const store=createStore(reducer,compose(applyMiddleware(thunk)))
  return (
  
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    
     <Routes>
     <Route  path="/" element={<Home/>} />
     <Route path="/product" element={<Product/>} />
     <Route path="/account" element={<Account/>} />
     <Route path="/cart" element={<Cart/>} />
     <Route path="*" element={<Home/>} />
     </Routes>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
