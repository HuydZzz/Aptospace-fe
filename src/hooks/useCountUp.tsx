import { useState, useEffect } from "react";

const useCountUp = (target: number, duration: number = 2000): number => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const increment = Math.ceil(target / (duration / 50));
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return Math.min(prevCount + increment, target);
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, [target, duration]);

  return count;
};

export default useCountUp;
