import { useRef, useLayoutEffect } from "react";

export function useLatest(value) {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
