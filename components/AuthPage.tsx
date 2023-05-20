import theme from '@/styles/theme';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { styled } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import LoginForm from './LoginForm';
import { Button } from './UI/Button';
import SignupForm from './SignupForm';

interface Props {
  active: boolean;
}

interface Inputs {
  email: string;
  password: string;
}

const StyledSection = styled.main<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  min-height: 100vh;
  background: ${({ active }) =>
    active ? theme.colors.olympic_red : theme.colors.olympic_blue};
  transition: 0.5s;

  > p {
    color: ${theme.colors.background};
    font-weight: ${theme.fontWeight.medium};
  }
`;

const SectionContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppTitle = styled.h1`
  color: ${theme.colors.background};
  font-size: 2.5rem;
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

  @media (max-width: ${theme.breakpoints.lg}) {
    width: 100%;
    height: 500px;
    top: ${({ active }) => (active ? '150px' : '0')};
    box-shadow: none;
    left: 0;
  }
`;

export const Form = styled.div<Props>`
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
    font-size: 2rem;
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
    width: 100px;
    border-radius: ${theme.borderRadius.button};
    cursor: pointer;

    @media (max-width: ${theme.breakpoints.lg}) {
      width: 100%;
    }
  }
`;

const AuthPage = () => {
  const [isFormBoxActive, setIsFormBoxActive] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleSignupButtonClick = () => {
    setIsFormBoxActive(!isFormBoxActive);
  };

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <StyledSection active={isFormBoxActive}>
        <SectionContainer>
          <AppTitle>Olympic Games App</AppTitle>
          <p>
            If you want to edit some of the athletes in this App you need to Log
            In. If you don&apos;t you can still navigate through them
          </p>
          <Container>
            <BlurBg>
              <LoginBox>
                <h2>Already have an account?</h2>
                <Button color="standard" onClick={handleSignupButtonClick}>
                  Log In
                </Button>
              </LoginBox>
              <Box>
                <h2>Don&apos;t have an account?</h2>
                <Button color="standard" onClick={handleSignupButtonClick}>
                  Sign Up
                </Button>
              </Box>
            </BlurBg>
            <FormBox active={isFormBoxActive}>
              <LoginForm active={isFormBoxActive} />
              <SignupForm active={isFormBoxActive} />
            </FormBox>
          </Container>
        </SectionContainer>
      </StyledSection>
    </>
  );
};

export default AuthPage;
