import { CurrentUserContextType, UserContext } from '@/context/UserContext';
import theme from '@/styles/theme';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { styled } from 'styled-components';
import { Button } from './UI/Button';

const NavbarHeader = styled.header`
  align-items: center;
  background-color: ${theme.colors.background};
  border-bottom: 1px solid ${theme.colors.navbar_border};
  display: flex;
  justify-content: space-between;
  left: 0px;
  padding: 0 1.5rem;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1001;
  height: ${theme.height.navbar};
`;

const NavbarLinks = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 0 1rem;
`;

const Navbar = () => {
  const { user, setUser } = useContext(UserContext) as CurrentUserContextType;

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser({ email: '', token: '' });
  };

  return (
    <NavbarHeader>
      <Link href="/">
        <Image
          src="/logo_color.svg"
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
      {user.email ? (
        <Button onClick={handleLogout} color="red">
          Log Out
        </Button>
      ) : (
        <Button href="/" as={Link} color="blue">
          Log In
        </Button>
      )}
    </NavbarHeader>
  );
};

export default Navbar;
