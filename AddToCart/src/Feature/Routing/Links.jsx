import { Link, NavLink, Outlet } from "react-router-dom";
const Links = () => {
  return (
    <div>
      <NavLink to="/" style={{ marginLeft: "20px" }}>
        Home
      </NavLink>

      <Link to="/about" replace style={{ marginLeft: "20px" }}>
        About
      </Link>
      <Link to="/book" reloadDocument style={{ marginLeft: "20px" }}>
        Book
      </Link>
      <Link to="/dynamic/:id" style={{ marginLeft: "20px" }}>
        Dynamic
      </Link>
      <Link to="/book/new" style={{ marginLeft: "20px" }}>
        NewBook
      </Link>
      <Outlet />
    </div>
  );
};

export default Links;
