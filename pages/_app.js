import { useState } from 'react';
import AuthForm from '../components/auth/AuthForm';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };

  return (
    <>
      {login ? (
        <Layout>
          <Component {...pageProps} />{' '}
        </Layout>
      ) : (
        <AuthForm handleLogin={handleLogin} />
      )}
    </>
  );
}

export default MyApp;
