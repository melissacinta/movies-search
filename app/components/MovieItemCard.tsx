import { classNames } from '../config';

type IMovieItemCard = {
  title: string;
  value: string;
  style?: string;
};
const MovieItemCard = ({ title, value, style }: IMovieItemCard) => {
  return (
    <div className={classNames(style ?? '', 'flex flex-col gap-4 mt-4')}>
      <h5 className="text-md font-medium">{title}</h5>
      <p className="text-md font-normal">{value}</p>
    </div>
  );
};

export default MovieItemCard;

export const MovieItemCardTwo = ({ title, value }: IMovieItemCard) => {
  return (
    <div className="flex gap-4 items-start mt-4">
      <h5 className="text-md font-medium">{title}:</h5>
      <p className="text-md font-normal">{value}</p>
    </div>
  );
};
