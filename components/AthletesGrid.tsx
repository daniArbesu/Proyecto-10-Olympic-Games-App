import { Athlete } from '@/types';
import Image from 'next/image';

interface Props {
  athletes: Array<Athlete>;
}

const AthletesGrid = ({ athletes }: Props) => {
  return (
    <div>
      {athletes.map((athlete) => (
        <article key={athlete._id}>
          <Image width={100} height={100} src="" alt="" />
          <h3>Athlete name</h3>
        </article>
      ))}
    </div>
  );
};

export default AthletesGrid;
