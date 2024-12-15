import 'modern-normalize';
import { Route, Routes } from 'react-router';
import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path='contacts'
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route
          path='login'
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />
          }
        />
        <Route
          path='register'
          element={
            <RestrictedRoute
              component={<RegistrationPage />}
              redirectTo='/contacts'
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
