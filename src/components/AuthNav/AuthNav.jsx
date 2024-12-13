import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router';
import s from '../Navigation/Navigation.module.css';

const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {!isLoggedIn && (
        <ul className={s.user_nav_list}>
          <NavLink className={s.links} to='/login'>
            Login
          </NavLink>
          <NavLink className={s.links} to='/register'>
            Registration
          </NavLink>
        </ul>
      )}
    </>
  );
};

export default AuthNav;
