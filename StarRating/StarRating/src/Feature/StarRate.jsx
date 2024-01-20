import { useState } from "react";
import { FaStar } from "react-icons/fa";
const StarRate = () => {
  const [number, setNumber] = useState(0);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      {arr.map((item, index) => {
        const current = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              value={current}
              onClick={() => setNumber(current)}
              style={{ display: "none" }}
            />
            <FaStar
              size={40}
              key={index}
              style={{
                cursor: "pointer",
                color: current <= number ? "yellow" : "grey",
              }}
            />
          </label>
        );
      })}
      <h3>Your Rating : {number}</h3>
    </div>
  );
};

export default StarRate;
