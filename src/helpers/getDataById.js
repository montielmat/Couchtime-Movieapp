export const getMovies = async (url,id) => {
    try {
      const req = await fetch(url,id);
      const response = await req.json();
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  