import "./style.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import CategoryItems from "./Pages/CategoryItems";
import Orders from "./Pages/Orders";
import Cart from "./Pages/Cart";
import Item from "./Pages/Item";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index path={"/"} element={<Home />} />
              <Route path="/category/:type" element={<CategoryItems />} />
              <Route path="/category/:type/:item" element={<Item />} />
              <Route path="cart" element={<Cart />} />
              <Route path="orders" element={<Orders />} />
              <Route path="*" element={<p className="empty">Page Not Found</p>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
