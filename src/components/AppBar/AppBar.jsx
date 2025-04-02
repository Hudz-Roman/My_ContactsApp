import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import s from './AppBar.module.css';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <header className={s.wrapper}>
      <Navigation />
      {isLoggedIn && <p>{user.email}</p>}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
