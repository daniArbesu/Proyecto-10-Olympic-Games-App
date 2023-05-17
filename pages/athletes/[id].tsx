import AthleteBio from '@/components/AthleteBio';
import AthleteTable from '@/components/AthleteTable';
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
        <AthleteTable athlete={athlete} />
        <AthleteBio bio={athlete.bio} />
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
