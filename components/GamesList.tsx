import { Game } from '@/types';
import Link from 'next/link';

interface Props {
  games: Array<Game>;
}

const GamesList = ({ games }: Props) => {
  return (
    <div>
      {games.map((game) => (
        <Link href={`/games/${game._id}`} key={game._id}>
          <h3>
            {game.city} {game.year}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default GamesList;
