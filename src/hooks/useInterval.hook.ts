import React, {useEffect, useRef} from "react";
import {INTERVAL_UPDATE_CELL} from "../config/grid.config";

export const useInterval = (callback: () => void, delay: number = INTERVAL_UPDATE_CELL): void => {
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
