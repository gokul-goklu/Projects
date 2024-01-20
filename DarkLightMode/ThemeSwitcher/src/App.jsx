import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./ThemeSwitcher/Home";
import Contact from "./ThemeSwitcher/Contact";
import Help from "./ThemeSwitcher/Help";
import NavBar from "./ThemeSwitcher/NavBar";
import { ThemeProvider } from "./ThemeSwitcher/ThemeContext";
import "./App.css";
function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
