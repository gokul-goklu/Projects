import "./SingleCard.css";
const SingleCard = ({ item, carting, setCarting }) => {
  const HandleAddClick = () => {
    setCarting([...carting, item]);
  };
  const HandleRemoveClick = () => {
    setCarting(
      carting.filter((cur) => {
        return cur.id !== item.id;
      })
    );
  };
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <img src={item.image} style={{ width: "50px", height: "50px" }} />
      <h2>{item.price}</h2>
      {carting.includes(item) ? (
        <button onClick={HandleRemoveClick}>RemoveFromCart</button>
      ) : (
        <button onClick={HandleAddClick}>AddToCart</button>
      )}
    </div>
  );
};

export default SingleCard;
