import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router';
import { logout } from '../../redux/auth/operations';
import s from '../Navigation/Navigation.module.css';

const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <ul className={s.user_nav_list}>
      {isLoggedIn && (
        <>
          <NavLink className={s.links} to='/contacts'>
            Contacts
          </NavLink>
          <NavLink
            className={s.links}
            to='/'
            onClick={() => dispatch(logout())}
          >
            Logout
          </NavLink>
        </>
      )}
    </ul>
  );
};

export default UserMenu;
