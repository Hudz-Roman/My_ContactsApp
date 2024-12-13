import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from '../StartsPagesStyles.module.css';

const RegistrationPage = () => {
  return (
    <div className={s.wrapper}>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
