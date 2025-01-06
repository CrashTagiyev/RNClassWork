import {NETFLIX_API_URI} from '../../Utils/Uris';

export const getTrendingMovies = async () => {
  const response = await fetch(`${NETFLIX_API_URI}/movie/trending`, {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await response.json();
  if (data.success) return data.content;
};
