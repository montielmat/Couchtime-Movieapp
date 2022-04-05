export const getMovies = async (url) => {
  try {
    const req = await fetch(url);
    const { results } = await req.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};
