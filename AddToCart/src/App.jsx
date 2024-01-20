import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextHome from "./Feature/ContextApi/ContextHome";
import Cart from "./Feature/ContextApi/Cart";
import HeaderLink from "./Feature/ContextApi/HeaderLink";
import SingleCard from "./Feature/ContextApi/SingleCard";
import { useState } from "react";
// import Home from "./Feature/Routing/Home";
// import About from "./Feature/Routing/About";
// import Book from "./Feature/Routing/Book";
// import Links from "./Feature/Routing/Links";
// import Dynamic from "./Feature/Routing/Dynamic";
// import Notfound from "./Feature/Routing/Notfound";
// import NewBook from "./Feature/Routing/NewBook";
function App() {
  const [carting, setCarting] = useState([]);

  return (
    <>
      <BrowserRouter>
        <HeaderLink />

        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Links />}>
            <Route index element={<Book />} />
            <Route path="new" element={<NewBook />} />
          </Route>
          <Route path="/dynamic/:id" element={<Dynamic />} />
          <Route path="*" element={<Notfound />} /> */}
          <Route
            path="/"
            element={<ContextHome carting={carting} setCarting={setCarting} />}
          />
          <Route
            path="/cart"
            element={<Cart carting={carting} setCarting={setCarting} />}
          />
          <Route path="/single" element={<SingleCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
