import { Link } from "react-router-dom";
import "./NavStyle.css";
import { useTheme } from "./ThemeContext";
const NavBar = () => {
  const { toggleTheme, theme } = useTheme();
  console.log(theme);
  return (
    <div className="outer-cell">
      <Link className="inner-cell" to="/">
        Home
      </Link>
      <Link className="inner-cell" to="/contact">
        Contact
      </Link>
      <Link className="inner-cell" to="/help">
        Help
      </Link>
      <div>
        <input type="checkbox" onChange={toggleTheme} />
      </div>
    </div>
  );
};

export default NavBar;
