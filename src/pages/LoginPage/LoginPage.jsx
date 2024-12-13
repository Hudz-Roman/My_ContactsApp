import LoginForm from '../../components/LoginForm/LoginForm';
import s from '../StartsPagesStyles.module.css';

const LoginPage = () => {
  return (
    <div className={s.wrapper}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
