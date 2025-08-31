import { useState, useEffect } from "react";

function useAnimatedCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;

      const value = Math.min(
        Math.floor((progress / duration) * target),
        target
      );

      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);

    return () => {};
  }, [target, duration]);

  return count;
}

export default useAnimatedCounter;
