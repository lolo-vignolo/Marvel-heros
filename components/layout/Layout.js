import { Fragment, useState } from 'react';
import Head from 'next/head';

import MainNavigation from '../nav/MainNavigation';

const Layout = ({ children, name }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Fragment>
      <Head>
        <title>Marvel</title>
        <meta name="author" content="Lorenzo Vignolo" />
        <meta name="description" content={`info about Marvel Heros`} />
        <meta name="keywords" content={`marvel, heros`} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainNavigation toggleDarkMode={toggleDarkMode} />
      <main className={darkMode ? 'dark' : 'light'}>{children}</main>
    </Fragment>
  );
};

export default Layout;
