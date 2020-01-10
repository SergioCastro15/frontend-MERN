const SERVER = 'http://localhost:4000';
const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getMovies = async () => {
  const response = await fetch(`${SERVER}/get-movies`, {
    method: 'GET',
    headers: HEADERS
  });
  const data = await response.json();

  return data;
};

const getMovie = async (id) => {
  const response = await fetch(`${SERVER}/get-movie/${id}`, {
    method: 'GET',
    headers: HEADERS
  });
  const data = await response.json();

  return data;
};

const postMovie = async (movie) => {
   await fetch(`${SERVER}/post-movie`,{
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(movie)
  });
};

const deleteMovie = async (id) => {
  await fetch(`${SERVER}/delete-movie/${id}`, {
    method: 'DELETE',
    headers: HEADERS,
  });
};

const editMovie = async ({ movie, id }) => {
  await fetch(`${SERVER}/edit-movie/${id}`,{
    method: 'PUT',
    headers: HEADERS,
    body: JSON.stringify(movie)
  });
};

export {
  getMovies,
  postMovie,
  getMovie,
  deleteMovie,
  editMovie
};