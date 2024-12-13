import 'modern-normalize';
import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='contacts' element={<ContactsPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegistrationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
