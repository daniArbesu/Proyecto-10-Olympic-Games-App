import { AthleteImage, PageTitle } from '@/styles/PageStyles';
import { Athlete } from '@/types';
import { GetStaticProps } from 'next';
import React from 'react';
import { styled } from 'styled-components';

const AthleteHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

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

const AthletePage = ({ athlete }: Props) => {
  return (
    <main>
      <section>
        <AthleteHeader>
          <AthleteImage
            src={athlete.photo_url ? athlete.photo_url : ''}
            alt={`Picture of ${athlete.name} ${athlete.surname}`}
            width={175}
            height={175}
          />
          <PageTitle>
            {athlete.name} {athlete.surname}
          </PageTitle>
        </AthleteHeader>
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
      </section>
    </main>
  );
};

export default AthletePage;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const response = await fetch(
    `https://olympic-athletes-server.onrender.com/api/athletes/${id}`
  );
  const { data: athlete } = await response.json();

  return {
    props: {
      athlete,
    },
    revalidate: 60,
  };
};
