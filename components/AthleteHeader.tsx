import { AthleteImage, PageTitle } from '@/styles/PageStyles';
import { Athlete } from '@/types';
import { styled } from 'styled-components';

type Props = Pick<Athlete, 'photo_url' | 'name' | 'surname'>;

const AthleteHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const AthleteHeaderTitle = styled.h1`
  font-size: 3.5rem;
  align-self: flex-start;
  word-break: break-word;
`;

const AthleteHeader = ({ photo_url, name, surname }: Props) => {
  return (
    <AthleteHeaderWrapper>
      <AthleteImage
        src={photo_url ? photo_url : ''}
        alt={`Picture of ${name} ${surname}`}
        width={175}
        height={175}
      />
      <AthleteHeaderTitle>
        {name} {surname}
      </AthleteHeaderTitle>
    </AthleteHeaderWrapper>
  );
};

export default AthleteHeader;
