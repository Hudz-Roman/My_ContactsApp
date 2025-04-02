import { NavLink } from 'react-router';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <NavLink className={s.mainLink} to='/'>
      My ContactsApp
    </NavLink>
  );
};

export default Navigation;
