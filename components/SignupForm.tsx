import theme from '@/styles/theme';
import { createUser, loginUser } from '@/utils/authentication';
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

const SignupFormWrapper = styled.section<Props>`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 50px;
  transition: 0.5s;
  transition-delay: ${({ active }) => (active ? '250ms' : '0')};
  left: ${({ active }) => (active ? '0' : '100%')};

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

const SignupForm = ({ active }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSignup: SubmitHandler<Inputs> = async (data) => {
    const response = createUser(data);

    toast.promise(response, {
      loading: 'Loading...',
      success: ({ data }) => `${data.toString()}`,
      error: (err) => `${err.toString().replace('Error: ', '')}`,
    });
  };

  return (
    <SignupFormWrapper active={active}>
      <form onSubmit={handleSubmit(onSignup)}>
        <h3>Sign Up</h3>
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
        <Button color="red" as="input" type="submit" value="Sign Up" />
      </form>
    </SignupFormWrapper>
  );
};

export default SignupForm;
