import { Athlete } from '@/types';
import { styled } from 'styled-components';
import AthleteCard from './AthleteCard';

interface Props {
  athletes: Array<Athlete>;
}

const AthletesList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: 1.5rem;
  padding: 1rem 0;
`;

const GameAthletesGrid = ({ athletes }: Props) => {
  return (
    <section>
      <AthletesList>
        {athletes ? (
          athletes.map((athlete) => (
            <li key={athlete._id}>
              <AthleteCard
                photo_url={athlete.photo_url}
                _id={athlete._id}
                name={athlete.name}
                surname={athlete.surname}
              />
            </li>
          ))
        ) : (
          <p>Loading Athletes...</p>
        )}
      </AthletesList>
    </section>
  );
};

export default GameAthletesGrid;
