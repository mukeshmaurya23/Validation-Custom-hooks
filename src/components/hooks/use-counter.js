import { useState, useEffect } from "react";
const useCounter = (incrdcr = true) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("hello");

    const interval = setInterval(() => {
      if (incrdcr) {
        setCounter((prevState) => prevState + 1);
      } else {
        setCounter((prevState) => prevState - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [incrdcr]);
  return counter;
};
export default useCounter;
