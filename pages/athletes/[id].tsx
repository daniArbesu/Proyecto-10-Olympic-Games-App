import AthleteBio from '@/components/AthleteBio';
import AthleteGamesMedal from '@/components/AthleteGamesMedal';
import AthleteHeader from '@/components/AthleteHeader';
import AthleteTable from '@/components/AthleteTable';
import { AthleteImage, PageTitle } from '@/styles/PageStyles';
import { Athlete, Game } from '@/types';
import { GetStaticProps } from 'next';
import React from 'react';
import { styled } from 'styled-components';

interface Props {
  athlete: Athlete;
}

const AthletePage = ({ athlete }: Props) => {
  return (
    <main>
      <section>
        <AthleteHeader
          photo_url={athlete.photo_url}
          name={athlete.name}
          surname={athlete.surname}
        />
        <AthleteTable athlete={athlete} />
        {athlete.games.length === 0 ? null : (
          <AthleteGamesMedal games={athlete.games as Array<Game>} />
        )}
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
    `https://olympic-athletes-server.onrender.com/api/athletes/populate/${id}`
  );
  const { data: athlete } = await response.json();

  return {
    props: {
      athlete,
    },
    revalidate: 60,
  };
};
