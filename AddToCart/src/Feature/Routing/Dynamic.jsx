import { Link, useParams } from "react-router-dom";

const Dynamic = () => {
  const { id } = useParams();
  return (
    <div>
      <h2> Dynamic id is {id}</h2>
      <Link to="/Dynamic/2" style={{ marginLeft: "20px" }}>
        D-2
      </Link>
      <Link to="/Dynamic/3" style={{ marginLeft: "20px" }}>
        D-3
      </Link>
    </div>
  );
};

export default Dynamic;
