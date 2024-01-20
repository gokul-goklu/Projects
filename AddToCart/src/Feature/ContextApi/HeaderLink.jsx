import { Link } from "react-router-dom";

const HeaderLink = () => {
  return (
    <div>
      <Link to="/" style={{ marginLeft: "40px" }}>
        Home
      </Link>
      <Link to="/cart" style={{ marginLeft: "40px" }}>
        Cart
      </Link>
    </div>
  );
};

export default HeaderLink;
