import { useEffect } from "react";

export function useLoadMovieById(movieId: string) {
  useEffect(() => {
    console.log("Modal Form: Load movie by Id: ", movieId);
    return () => console.log("Modal Form: unsubscribe movie loading");
  }, [movieId]);
}
