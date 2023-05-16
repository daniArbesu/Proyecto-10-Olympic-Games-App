import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'styled-components';

const NavbarHeader = styled.header`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const NavbarLinks = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 0 1rem;
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
        <NavbarLinks>
          <li>
            <Link href="/athletes">Athletes</Link>
          </li>
          <li>
            <Link href="/games">Games</Link>
          </li>
        </NavbarLinks>
      </nav>
    </NavbarHeader>
  );
};

export default Navbar;
