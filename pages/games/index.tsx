import { PageTitle } from '@/styles/PageStyles';
import { Game } from '@/types';
import Link from 'next/link';

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
        <div>
          {games ? (
            games.map((game) => (
              <Link href={`/games/${game._id}`} key={game._id}>
                <h3>
                  {game.city} {game.year}
                </h3>
              </Link>
            ))
          ) : (
            <p>Loading Olympic Games...</p>
          )}
        </div>
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
