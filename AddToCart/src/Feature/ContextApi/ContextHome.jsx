import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { ClimbingBoxLoader } from "react-spinners";
const ContextHome = ({ carting, setCarting }) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoad] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => {
        setProduct(result);
        setLoad(false);
      })
      .catch((err) => {
        <ClimbingBoxLoader />;
        console.error(err);
      });
  }, []);
  console.log(carting);
  return (
    <div className="container">
      {isLoading ? (
        <ClimbingBoxLoader />
      ) : (
        product.map((item) => {
          //console.log(item);
          return (
            <SingleCard
              key={item.id}
              item={item}
              carting={carting}
              setCarting={setCarting}
            />
          );
        })
      )}
    </div>
  );
};

export default ContextHome;
