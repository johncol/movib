import React, { ReactElement } from 'react';

import { urls } from '../../services/urls';

interface Props {
  onClick: (movieId: string) => void;
}

export const RemoveFromWatchList = ({ onClick }: Props): ReactElement => {
  const remove = (): void => {
    const movieId: string = urls.getMovieIdFromUrl();
    onClick(movieId);
  };

  return (
    <button className="bordered-cta" title="Remove from watch list" onClick={remove}>
      Remove
    </button>
  );
};
