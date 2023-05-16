import { useRouter } from 'next/router';
import React from 'react';

const AthletePage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  console.log(router.query);

  return <h1>This is the page for the athlete with id {id}</h1>;
};

export default AthletePage;

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
