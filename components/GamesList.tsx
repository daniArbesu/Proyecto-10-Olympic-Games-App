import { Game } from '@/types';
import Link from 'next/link';
import { styled } from 'styled-components';

interface Props {
  games: Array<Game>;
}

const GamesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const GameName = styled.h3`
  font-weight: 300;
`;

const GamesList = ({ games }: Props) => {
  return (
    <GamesListWrapper>
      {games.map((game) => (
        <Link href={`/games/${game._id}`} key={game._id}>
          <GameName>
            {game.city} {game.year}
          </GameName>
        </Link>
      ))}
    </GamesListWrapper>
  );
};

export default GamesList;
