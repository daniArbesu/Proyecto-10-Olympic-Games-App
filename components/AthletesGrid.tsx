import { Athlete } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'styled-components';

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

const AthleteCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  text-align: center;
  gap: 0.7rem;
`;

const AthleteImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

const Athletename = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  line-height: 18px;
  text-transform: uppercase;
`;

const AthletesGrid = ({ athletes }: Props) => {
  return (
    <section>
      <AthletesList>
        {athletes ? (
          athletes.map((athlete) => (
            <li key={athlete._id}>
              <AthleteCard>
                <Link href={`/athletes/${athlete._id}`}>
                  <AthleteImage
                    width={80}
                    height={80}
                    src={athlete.photo_url ? athlete.photo_url : ''}
                    alt={`photo from ${athlete.name}`}
                  />
                  <Athletename>
                    {athlete.name} {athlete.surname}
                  </Athletename>
                </Link>
              </AthleteCard>
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
