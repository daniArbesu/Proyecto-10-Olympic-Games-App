import GamesList from '@/components/GamesList';
import { PageTitle } from '@/styles/PageStyles';
import { Game } from '@/types';

interface Props {
  games: Array<Game>;
}

const GamesPage = ({ games }: Props) => {
  return (
    <main>
      <section>
        <header>
          <PageTitle>Olympic Games</PageTitle>
        </header>
        {games ? <GamesList games={games} /> : <p>Loading Olympic Games...</p>}
      </section>
    </main>
  );
};

export default GamesPage;

export const getStaticProps = async () => {
  const response = await fetch(
    'https://olympic-athletes-server.onrender.com/api/games/'
  );
  const { data: games } = await response.json();

  return {
    props: {
      games,
    },
    revalidate: 60,
  };
};
