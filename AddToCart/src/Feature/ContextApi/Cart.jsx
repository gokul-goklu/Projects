import SingleCard from "./SingleCard";

const Cart = ({ carting, setCarting }) => {
  return (
    <div>
      {carting.map((item) => {
        return (
          <SingleCard
            key={item.id}
            item={item}
            carting={carting}
            setCarting={setCarting}
          />
        );
      })}
    </div>
  );
};

export default Cart;
