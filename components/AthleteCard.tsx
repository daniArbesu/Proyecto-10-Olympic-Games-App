import { AthleteImage } from '@/styles/PageStyles';
import { Athlete } from '@/types';
import Link from 'next/link';
import { styled } from 'styled-components';

type Props = Pick<Athlete, '_id' | 'photo_url' | 'name' | 'surname'>;

const AthleteCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  text-align: center;
  gap: 0.7rem;
`;

const Athletename = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  line-height: 18px;
  text-transform: uppercase;
`;

const AthleteCard = ({ _id: id, photo_url, name, surname }: Props) => {
  return (
    <AthleteCardWrapper>
      <Link href={`/athletes/${id}`}>
        <AthleteImage
          width={80}
          height={80}
          src={photo_url ? photo_url : ''}
          alt={`photo from ${name}`}
        />
        <Athletename>
          {name} {surname}
        </Athletename>
      </Link>
    </AthleteCardWrapper>
  );
};

export default AthleteCard;
