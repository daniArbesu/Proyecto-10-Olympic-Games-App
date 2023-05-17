import { AthleteSectionTitle } from '@/styles/PageStyles';
import { Athlete } from '@/types';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { styled } from 'styled-components';

type Props = Pick<Athlete, 'bio'>;

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
      <AthleteSectionTitle>Biography</AthleteSectionTitle>
      <AthleteBioText>{bio}</AthleteBioText>
    </section>
  );
};

export default AthleteBio;
