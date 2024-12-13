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
      <h1>My ContactsApp</h1>
      {isLoggedIn && <p>{user.email}</p>}
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
