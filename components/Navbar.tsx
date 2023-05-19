import theme from '@/styles/theme';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'styled-components';

const NavbarHeader = styled.header`
  align-items: center;
  background-color: ${theme.colors.background};
  border-bottom: 1px solid ${theme.colors.navbar_border};
  display: flex;
  justify-content: space-between;
  left: 0px;
  padding: 1rem;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1001;
`;

const NavbarLinks = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 0 1rem;
`;

const LoginButton = styled.button`
  background-color: ${theme.colors.olympic_blue};
  color: white;
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
      <LoginButton>Log In</LoginButton>
    </NavbarHeader>
  );
};

export default Navbar;
