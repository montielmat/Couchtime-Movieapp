export const getMovies = async (url) => {
  try {
    const req = await fetch(url);
    const response = await req.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
