import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import 'modern-normalize';
import s from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>My ContactsApp</h1>
      <div className={s.app_wrapper}>
        <div>
          <ContactForm />
          <SearchBox />
        </div>
        <ContactList />
      </div>
    </div>
  );
}

export default App;
