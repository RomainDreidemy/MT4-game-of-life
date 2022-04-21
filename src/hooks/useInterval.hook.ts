import React, {useEffect, useRef} from "react";

export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback: React.MutableRefObject<any> = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}
