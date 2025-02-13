import {NETFLIX_API_URI} from '../../Utils/Uris';

export const getTrendingTvShows = async () => {
  const response = await fetch(`${NETFLIX_API_URI}/tv/trending`, {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await response.json();
  if (data.success) return data.content;
};
