import { useEffect, useState, useRef } from "react";

import { getMovies } from "../helpers/getMovies";

export const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({ res: [], error: null, loading: true });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    try {
      getMovies(url).then((data) => {
        if (isMounted.current) {
          setState({ ...state, res: data, error: null, loading: false });
        }
      });
    } catch (error) {
      setState({ ...state, res: null, error: error, loading: false });
    }
  }, [url]);

  return state;
};
