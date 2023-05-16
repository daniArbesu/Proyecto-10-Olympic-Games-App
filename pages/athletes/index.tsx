import AthletesGrid from '@/components/AthletesGrid';
import { Athlete } from '@/types';

interface Props {
  athletes: Array<Athlete>;
}

const AthletesPage = ({ athletes }: Props) => {
  return (
    <main>
      <section>
        <header>
          <h1>Athletes</h1>
        </header>
        <AthletesGrid athletes={athletes} />
      </section>
    </main>
  );
};

export default AthletesPage;

export const getStaticProps = async () => {
  const response = await fetch(
    'https://olympic-athletes-server.onrender.com/api/athletes/'
  );
  const { data: athletes } = await response.json();

  return {
    props: {
      athletes,
    },
  };
};
