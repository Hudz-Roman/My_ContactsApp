import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import App from './components/App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster position='top-center' reverseOrder={false} />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
