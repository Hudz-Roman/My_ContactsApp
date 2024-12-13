import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.home_title}>Welcome to My ContactsApp </h1>
      <p className={s.home_text}>
        Keep all your essential contacts in one convenient and accessible place
        with My ContactsApp. Our user-friendly single-page application
        simplifies contact management, allowing you to easily add, edit, and
        delete contacts. Enjoy a clean and intuitive interface that ensures you
        can find the information you need in seconds. My ContactsApp is designed
        to help you stay organized and connected with ease. Whether you`re
        managing personal or professional contacts, our app offers a seamless
        and efficient solution. Join us and experience the simplicity and
        convenience of My ContactsApp—your ultimate tool for contact management.
      </p>
    </div>
  );
};

export default HomePage;
