import theme from '@/styles/theme';
import { ReactNode } from 'react-markdown/lib/ast-to-react';
import { styled } from 'styled-components';

interface WrapperProps {
  isLogin: boolean; //check if it's the login form or the signup
}

interface Props extends WrapperProps {
  children: ReactNode;
}

const Form = styled.section<WrapperProps>`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 3.125rem;
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
    background: ${({ isLogin }) =>
      isLogin ? theme.colors.olympic_red : theme.colors.olympic_blue};
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

const FormWrappper = ({ isLogin, children }: Props) => {
  return <Form isLogin={isLogin}>{children}</Form>;
};

export default FormWrappper;
