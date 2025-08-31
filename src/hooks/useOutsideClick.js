import { useEffect, useRef } from "react";

export function useOutsideClick(
  handler,
  exceptions = [],
  listenCapturing = true
) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && ref.current.contains(e.target)) return;

      for (const exceptionRef of exceptions) {
        if (exceptionRef.current && exceptionRef.current.contains(e.target))
          return;
      }

      handler();
    }

    document.addEventListener("click", handleClick, listenCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, exceptions, listenCapturing]);

  return ref;
}
