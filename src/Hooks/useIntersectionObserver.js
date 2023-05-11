import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (callback) => {
  const [observationTarget, setObservationTarget] = useState(null);

  const option = { threshold: 1 };

  const observer = useRef(new IntersectionObserver(ioCallback, option));

  function ioCallback(entries) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      callback();
    });
  }

  useEffect(() => {
    const currentObserver = observer.current;
    if (observationTarget) {
      currentObserver.observe(observationTarget);
    }

    return () => {
      if (observationTarget) {
        currentObserver.unobserve(observationTarget);
      }
    };
  }, [observationTarget]);

  return setObservationTarget;
};

export default useIntersectionObserver;
