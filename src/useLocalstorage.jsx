import { useEffect } from "react";

function useLocalStorage(key, state, updateState) {
  useEffect(() => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      updateState(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (state.length > 0) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state]);
}

export default useLocalStorage;
