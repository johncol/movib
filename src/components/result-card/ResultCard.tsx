import React, { ReactElement } from 'react';
import { MdClose } from 'react-icons/md';

import { Movie } from '../../services/omdb';
import { MovieCard } from '../movie-card/MovieCard';
import { ToggleInWatchList } from './ToggleInWatchList';

import './ResultCard.scss';

interface Props {
  when?: boolean;
  movie: Movie;
  onGoBack: () => void;
}

export const ResultCard = (props: Props): ReactElement | null => {
  const { when: visible } = props;
  if (!visible) {
    return null;
  }

  return (
    <div className="result-card">
      <ResultActions {...props} />
      <MovieCard movie={props.movie} />
    </div>
  );
};

const ResultActions = ({ onGoBack, movie }: Props): ReactElement => {
  return (
    <div className="result-actions">
      <ToggleInWatchList movie={movie} />
      <button onClick={onGoBack}>
        <MdClose />
      </button>
    </div>
  );
};
