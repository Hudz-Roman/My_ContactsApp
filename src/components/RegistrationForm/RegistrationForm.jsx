import { ErrorMessage, Field, Formik, Form } from 'formik';
import s from '../FormStyles.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome, ${res.user.name}`, {
          icon: '👏',
        });
        navigate('/contacts');
      })
      .catch(() => {
        toast.error('Something went wrong, try again');
      });
    options.resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <div className={s.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <h2 className={s.form_title}>Registration</h2>
          <label className={s.label}>
            <span>Name</span>
            <Field
              name='name'
              placeholder='Type your name'
              type='text'
              className={s.input_field}
            />
            <ErrorMessage name='name' component='span' className={s.error} />
          </label>
          <label className={s.label}>
            <span>E-Mail</span>
            <Field
              name='email'
              placeholder='Type your e-mail'
              type='text'
              className={s.input_field}
            />
            <ErrorMessage name='email' component='span' className={s.error} />
          </label>
          <label className={s.label}>
            <span>Password</span>
            <Field
              name='password'
              placeholder='Type your password'
              type='password'
              className={s.input_field}
            />
            <ErrorMessage
              name='password'
              component='span'
              className={s.error}
            />
          </label>
          <button type='submit' className={s.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
