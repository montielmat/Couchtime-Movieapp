export const getMovies = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/trending/all/week?api_key=e62c23c6a89f44bb94e028fd9db54528&language=en-US&page=1&limit=10"
    );
    const { results } = await res.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};
