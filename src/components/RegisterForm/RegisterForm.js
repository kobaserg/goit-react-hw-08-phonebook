import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperation';
import { FormLabel, FormRegister } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register(
        {
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        }
        // {
        //   name: 'Koba',
        //   email: 'koba@gmail.com',
        //   password: 'superbmercedes2010',
        // }
      )
    );

    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Username
        <input type="text" name="name" />
      </FormLabel>
      <FormLabel>
        Email
        <input type="email" name="email" />
      </FormLabel>
      <FormLabel>
        Password
        <input type="password" name="password" />
      </FormLabel>
      <button type="submit">Register</button>
    </FormRegister>
  );
};
