import { AthleteSectionTitle } from '@/styles/PageStyles';
import { Game } from '@/types';
import Link from 'next/link';

interface Props {
  games: Array<Game>;
}

const AthleteGamesMedal = ({ games }: Props) => {
  return (
    <section>
      <AthleteSectionTitle>Olympic Games</AthleteSectionTitle>
      <div>
        <ul>
          {games.map((game) => (
            <li key={game?._id}>
              <Link href={`/games/${game?._id}`}>
                {game?.city} {game?.year}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AthleteGamesMedal;
