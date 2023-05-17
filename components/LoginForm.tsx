import { useForm, SubmitHandler } from 'react-hook-form';
import { styled } from 'styled-components';

type Inputs = {
  email: string;
  password: string;
};

const LoginSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 2rem;
`;

const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoginFormInput = styled.input`
  font-size: 1rem;
  font-weight: 400;
  line-height: 3.2rem;
  padding: 0.5rem;
  border-radius: 5px;
`;

const LoginFormButton = styled.button`
  padding: 1.2rem;
  background-color: #0078d0;
  color: white;
  border: 0;
  border-radius: 5px;
`;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <LoginSectionWrapper>
      <p>
        If you want to edit some of the athletes in this App you need to Log In.
        If you don&apos;t you can still navigate through our App
      </p>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <LoginFormInput
          type="email"
          required={true}
          placeholder="Email"
          {...register('email', { required: true })}
        />

        {/* include validation with required or other standard HTML validation rules */}

        <LoginFormInput
          type="password"
          required={true}
          placeholder="Password"
          {...register('password', { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}

        <LoginFormButton type="submit">Log In</LoginFormButton>
      </LoginFormWrapper>
    </LoginSectionWrapper>
  );
};

export default LoginForm;
