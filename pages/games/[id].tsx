import GameAthletesGrid from '@/components/GameAthletesGrid';
import { Athlete, Game } from '@/types';
import { GetStaticProps } from 'next';

interface Props {
  game: Game;
}

const GamePage = ({ game }: Props) => {
  return (
    <main>
      <h1>
        {game.city} {game.year}
      </h1>
      <GameAthletesGrid athletes={game.athletes as Array<Athlete>} />
    </main>
  );
};

export default GamePage;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const response = await fetch(
    `https://olympic-athletes-server.onrender.com/api/games/populate/${id}`
  );
  const { data: game } = await response.json();

  return {
    props: {
      game,
    },
    revalidate: 60,
  };
};
