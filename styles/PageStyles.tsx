import Image from 'next/image';
import { styled } from 'styled-components';

export const PageTitle = styled.h1`
  text-align: center;
`;

export const AthleteImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

export const AthleteSectionTitle = styled.h2`
  font-size: 3.5rem;
  line-height: 5rem;
`;
