import theme from '@/styles/theme';
import { useState } from 'react';
import { styled } from 'styled-components';

interface Props {
  active: boolean;
}

const StyledSection = styled.main<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  min-height: calc(100vh - 5rem);
  background: ${({ active }) =>
    active ? theme.colors.olympic_red : theme.colors.olympic_blue};
  transition: 0.5s;
`;

const AppTitle = styled.h1`
  color: ${theme.colors.background};
`;

const Container = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  margin: 20px;

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 400px;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const BlurBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 40px;
  width: 100%;
  height: 420px;
  background: #ffffff33;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);
  border-radius: ${theme.borderRadius.box};

  @media (max-width: ${theme.breakpoints.lg}) {
    top: 0;
    height: 100%;
  }
`;

const Box = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.box};

  > h2 {
    color: ${theme.colors.background};
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 10px;
  }

  > button {
    background: ${theme.colors.background};
    color: ${theme.colors.primary};
    font-size: 1rem;
    font-weight: 500;
  }
  @media (max-width: ${theme.breakpoints.lg}) {
    position: absolute;
    width: 100%;
    height: 150px;
    bottom: 0;
  }
`;

const LoginBox = styled(Box)`
  @media (max-width: ${theme.breakpoints.lg}) {
    top: 0;
  }
`;
const SignupBox = styled(Box)``;

const LoginButton = styled.button``;
const SignupButton = styled.button``;

const FormBox = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: ${theme.colors.background};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: ${theme.borderRadius.box};
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
  transition: 0.5s ease-in-out;
  left: ${({ active }) => (active ? '50%' : '0')};

  @media (max-width: 991px) {
    width: 100%;
    height: 500px;
    top: ${({ active }) => (active ? '150px' : '0')};
    box-shadow: none;
    left: 0;
  }
`;

const Form = styled.div<Props>`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 50px;
  transition: 0.5s;

  > form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  > form h3 {
    font-size: 1.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 20px;
    font-weight: 500;
  }

  > form input {
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    font-size: 1rem;
  }

  > form input[type='submit'] {
    background: ${({ active }) =>
      active ? theme.colors.olympic_red : theme.colors.olympic_blue};
    border: none;
    color: ${theme.colors.background};
    max-width: 100px;
    border-radius: ${theme.borderRadius.button};
    cursor: pointer;
  }
`;
const LoginForm = styled(Form)`
  transition-delay: ${({ active }) => (active ? '0' : '250ms')};
  left: ${({ active }) => (active ? '-100%' : '0')};
`;

const SignupForm = styled(Form)`
  transition-delay: ${({ active }) => (active ? '250ms' : '0')};
  left: ${({ active }) => (active ? '0' : '100%')};
`;

const AuthPage = () => {
  const [isFormBoxActive, setIsFormBoxActive] = useState(false);

  const handleSignupButtonClick = () => {
    setIsFormBoxActive(!isFormBoxActive);
  };

  return (
    <StyledSection active={isFormBoxActive}>
      <AppTitle>Olympic Games App</AppTitle>
      <Container>
        <BlurBg>
          <LoginBox>
            <h2>Already have an account?</h2>
            <LoginButton onClick={handleSignupButtonClick}>Log In</LoginButton>
          </LoginBox>
          <SignupBox>
            <h2>Don&apos;t have an account?</h2>
            <SignupButton onClick={handleSignupButtonClick}>
              Sign Up
            </SignupButton>
          </SignupBox>
        </BlurBg>
        <FormBox active={isFormBoxActive}>
          <LoginForm active={isFormBoxActive}>
            <form action="">
              <h3>Log In</h3>
              <input type="email" placeholder="Email" name="" id="" />
              <input type="password" placeholder="Password" name="" id="" />
              <input type="submit" value="login" name="" id="" />
            </form>
          </LoginForm>
          <SignupForm active={isFormBoxActive}>
            <form action="">
              <h3>Sign Up</h3>
              <input type="email" placeholder="Email" name="" id="" />
              <input type="password" placeholder="Password" name="" id="" />
              <input type="submit" value="signup" name="" id="" />
            </form>
          </SignupForm>
        </FormBox>
      </Container>
    </StyledSection>
  );
};

export default AuthPage;
