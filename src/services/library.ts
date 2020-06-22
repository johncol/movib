import { omdb, Movies } from './omdb';

interface UserMovie {
  id: string;
}

interface WatchedMovie extends UserMovie {
  score: number;
}

interface UserMovies {
  userId: number;
  toWatch: UserMovie[];
  watched: WatchedMovie[];
}

type Catalog = 'toWatch' | 'watched';

const movies = async (user: number, catalog: Catalog): Promise<Movies> => {
  const response = await fetch(`http://localhost:4000/users/${user}/movies`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const matchingUsersMovies: UserMovies[] = await response.json();
  console.log(`User ${user} movies response:`, matchingUsersMovies);

  if (matchingUsersMovies.length !== 1) {
    throw new Error(`Users movies length expected to be 1 but was ${matchingUsersMovies.length}`);
  }

  const [userMovies] = matchingUsersMovies;
  const movies = (userMovies[catalog] as UserMovie[]).map((movie: UserMovie) => {
    return omdb.movie(movie.id);
  });

  return Promise.all(movies);
};

const moviesToWatch = (user: number): Promise<Movies> => {
  return movies(user, 'toWatch');
};

const moviesWatched = async (user: number): Promise<Movies> => {
  return movies(user, 'watched');
};

export const library = {
  moviesToWatch,
  moviesWatched,
};
