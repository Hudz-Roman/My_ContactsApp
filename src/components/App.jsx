// import ContactForm from './ContactForm/ContactForm';
// import SearchBox from './SearchBox/SearchBox';
// import ContactList from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import 'modern-normalize';
// import s from './App.module.css';
import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
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
