import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';
import App from './components/App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <Toaster position='top-center' reverseOrder={false} />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
