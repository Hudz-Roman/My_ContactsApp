import { NavLink } from 'react-router';
import s from './AppBar.module.css';

const Header = () => {
  return (
    <header className={s.wrapper}>
      <h1>My ContactsApp</h1>
      <ul className={s.nav_list}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/contacts'>Contacts</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Registration</NavLink>
      </ul>
    </header>
  );
};

export default Header;
