import { Athlete } from '@/types';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { styled } from 'styled-components';

type Props = Pick<Athlete, 'bio'>;

const AthleteBioTitle = styled.h2`
  font-size: 4rem;
  line-height: 5rem;
`;

const AthleteBioText = styled(ReactMarkdown)`
  font-size: 1.1rem;
  line-height: 2rem;
  font-weight: 400;

  > p {
    margin-bottom: 1.1rem;
  }
`;

const AthleteBio = ({ bio }: Props) => {
  return (
    <section>
      <AthleteBioTitle>Biography</AthleteBioTitle>
      <AthleteBioText>{bio}</AthleteBioText>
    </section>
  );
};

export default AthleteBio;
