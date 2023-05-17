import { AthleteImage } from '@/styles/PageStyles';
import { Athlete } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'styled-components';
import AthleteCard from './AthleteCard';

interface Props {
  athletes: Array<Athlete>;
}

const AthletesList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 2rem;
`;

const AthletesGrid = ({ athletes }: Props) => {
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

export default AthletesGrid;
