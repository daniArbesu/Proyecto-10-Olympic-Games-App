import theme from '@/styles/theme';
import { loginUser } from '@/utils/authentication';
import { useForm, SubmitHandler } from 'react-hook-form';
import { styled } from 'styled-components';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { CurrentUserContextType, UserContext } from '@/context/UserContext';
import { Button } from './UI/Button';

type Inputs = {
  email: string;
  password: string;
};

type Props = {
  active: boolean;
};

const LoginFormWrapper = styled.section<Props>`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 50px;
  transition: 0.5s;
  transition-delay: ${({ active }) => (active ? '0' : '250ms')};
  left: ${({ active }) => (active ? '-100%' : '0')};

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
`;

const LoginForm = ({ active }: Props) => {
  const { user, setUser } = useContext(UserContext) as CurrentUserContextType;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onLogin: SubmitHandler<Inputs> = async (data) => {
    const response = loginUser(data).then(({ data }) => {
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
    });

    toast.promise(response, {
      loading: 'Loading...',
      success: 'Logged in',
      error: (err) => `${err.toString().replace('Error: ', '')}`,
    });
  };

  return (
    <LoginFormWrapper active={active}>
      <form onSubmit={handleSubmit(onLogin)}>
        <h3>Log In</h3>
        <input
          type="email"
          placeholder="Email"
          required={true}
          {...register('email', { required: true })}
        />
        <input
          type="password"
          required={true}
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <Button color="blue" as="input" type="submit" value="Log In" />
      </form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
