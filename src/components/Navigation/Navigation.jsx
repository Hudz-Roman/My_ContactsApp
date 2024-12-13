import { NavLink } from 'react-router';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <ul className={s.nav_list}>
      <NavLink className={s.links} to='/'>
        Home
      </NavLink>
    </ul>
  );
};

export default Navigation;
