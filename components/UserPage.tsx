import { CurrentUserContextType, UserContext } from '@/context/UserContext';
import { PageTitle } from '@/styles/PageStyles';
import { useContext, useState } from 'react';
import { Button } from './UI/Button';
import { styled } from 'styled-components';
import AthleteModalBox from './AthleteDialogBox';

const ButtonSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 300px;
  height: 100%;
  margin: 0 auto;
`;

const MainWrapper = styled.main`
  height: 100%;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const UserPage = () => {
  const { user } = useContext(UserContext) as CurrentUserContextType;
  const [showAthleteModal, setShowAthleteModal] = useState(false);

  const openAthleteModal = () => {
    setShowAthleteModal((showAthleteModal) => !showAthleteModal);
  };

  return (
    <MainWrapper>
      <PageTitle>Welcome, {user.email}</PageTitle>
      {showAthleteModal ? <AthleteModalBox /> : null}
      <ButtonSectionWrapper>
        <Button color="blue" onClick={openAthleteModal}>
          Add new Athlete
        </Button>

        <Button color="blue">Add new Olympic Game</Button>
      </ButtonSectionWrapper>
    </MainWrapper>
  );
};

export default UserPage;
