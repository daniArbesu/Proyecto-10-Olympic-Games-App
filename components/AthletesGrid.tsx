import { Athlete } from '@/types';
import Image from 'next/image';
import { styled } from 'styled-components';

interface Props {
  athletes: Array<Athlete>;
}

const AthletesList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 10px;
`;

const Athletename = styled.h3`
  color: #2d2d2d;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 20px;
  min-height: 35px;
  text-transform: uppercase;
`;

const AthletesGrid = ({ athletes }: Props) => {
  return (
    <section>
      <AthletesList>
        {athletes ? (
          athletes.map((athlete) => (
            <li key={athlete._id}>
              <article>
                <Image
                  width={80}
                  height={80}
                  src={athlete.photo_url ? athlete.photo_url : ''}
                  alt={`photo from ${athlete.name}`}
                />
                <Athletename>
                  {athlete.name} {athlete.surname}
                </Athletename>
              </article>
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
