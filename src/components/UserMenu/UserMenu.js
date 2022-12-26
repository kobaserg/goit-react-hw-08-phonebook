import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperation';
import { useAuth } from 'hooks';
import { User, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <User>Welcome, {user.name}</User>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
