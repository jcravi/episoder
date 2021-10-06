export interface ITVMaze {
  show: {
    id: number;
    name: string;
    premiered: string;
    ended: string;
    image: {
      medium: string;
    };
  };
}

export interface ITVEpisode {
  name: string;
  season: number;
  number: number;
}

const episodeCache: Map<number, Array<ITVEpisode>> = new Map<
  number,
  Array<ITVEpisode>
>();

export const search = (query: string): Promise<Array<ITVMaze>> =>
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((resp) => resp.json())
    .then((json) => json as Array<ITVMaze>);

export const episodes = (id: number): Promise<Array<ITVEpisode>> => {
  const fromCache = episodeCache.get(id);
  if (fromCache) {
    return new Promise((resolve, reject) => {
      resolve(fromCache);
    });
  }
  return fetch(`https://api.tvmaze.com/shows/${id}/episodes`)
    .then((resp) => resp.json())
    .then((json) => json as Array<ITVEpisode>)
    .then((array) => {
      episodeCache.set(id, array);
      return array;
    });
};
