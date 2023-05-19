import { CurrentUserContextType, UserContext } from '@/context/UserContext';
import theme from '@/styles/theme';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { styled } from 'styled-components';

interface LoginButtonProps {
  login: boolean;
}

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

const LoginButton = styled.button<LoginButtonProps>`
  background-color: ${({ login }) =>
    login ? theme.colors.olympic_blue : theme.colors.olympic_red};
  color: white;
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
      {user.email ? (
        <LoginButton onClick={handleLogout} login={false}>
          Log Out
        </LoginButton>
      ) : (
        <LoginButton login={true}>Log In</LoginButton>
      )}
    </NavbarHeader>
  );
};

export default Navbar;
