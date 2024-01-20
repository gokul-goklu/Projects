import { useEffect, useState } from "react";

const DigiClock = () => {
  const [time, setTime] = useState(new Date());
  const finalTime = time.toLocaleTimeString();
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <h2>{finalTime}</h2>
    </div>
  );
};

export default DigiClock;
