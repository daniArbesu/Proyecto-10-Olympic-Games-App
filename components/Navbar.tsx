import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'styled-components';

const NavbarHeader = styled.header`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`;

const Navbar = () => {
  return (
    <NavbarHeader>
      <Link href="/">
        <Image
          src={'https://olympics.com/images/static/b2p-images/logo_color.svg'}
          width={87}
          height={40}
          alt="Olympic Games Logo"
        />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/athletes">Athletes</Link>
          </li>
          <li>
            <Link href="/games">Games</Link>
          </li>
        </ul>
      </nav>
    </NavbarHeader>
  );
};

export default Navbar;
