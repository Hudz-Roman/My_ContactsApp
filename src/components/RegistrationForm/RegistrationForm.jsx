import { ErrorMessage, Field, Formik, Form } from 'formik';
import s from '../ContactForm/ContactForm.module.css';

const LoginForm = () => {
  return (
    <div className={s.wrapper}>
      <Formik>
        <Form className={s.form}>
          <h2>Registration</h2>
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
              type='text'
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

export default LoginForm;
