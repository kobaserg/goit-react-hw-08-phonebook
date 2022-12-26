import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperation';

import { LoginFormInput, LoginLabel } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn(
        {
          email: form.elements.email.value,
          password: form.elements.password.value,
        }
        // {
        //   email: 'koba@gmail.com',
        //   password: 'superbmercedes2010',
        // }
      )
    );
    form.reset();
  };

  return (
    <LoginFormInput onSubmit={handleSubmit} autoComplete="off">
      <LoginLabel>
        Email
        <input type="email" name="email" />
      </LoginLabel>
      <LoginLabel>
        Password
        <input type="password" name="password" />
      </LoginLabel>
      <button type="submit">Log In</button>
    </LoginFormInput>
  );
};
