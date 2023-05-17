import { Athlete } from '@/types';
import { styled } from 'styled-components';

const AthleteDetails = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0px;
  width: 100%;
  border-bottom: 0.1rem solid #e5e5e5;

  > span:first-child {
    color: #878787;
  }
`;

interface Props {
  athlete: Athlete;
}

const AthleteTable = ({ athlete }: Props) => {
  return (
    <AthleteDetails>
      <DetailsRow>
        <span>Date of Birth</span>
        <span>{athlete.date_of_birth}</span>
      </DetailsRow>
      <DetailsRow>
        <span>Height</span>
        <span>{athlete.height} cm</span>
      </DetailsRow>
      <DetailsRow>
        <span>Weigth</span>
        <span>{athlete.weight} kg</span>
      </DetailsRow>
      <DetailsRow>
        <span>Won a medal in</span>
        <span>{athlete.games.length} games</span>
      </DetailsRow>
    </AthleteDetails>
  );
};

export default AthleteTable;
