import { Fragment, useState } from 'react';
import Head from 'next/head';

import MainNavigation from '../nav/MainNavigation';
import Footer from '../footer/Footer';

const origin = typeof window !== 'undefined' ? window.location.origin : '';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <Fragment>
        <Head>
          <title>Marvel</title>
          <meta name="author" content="Lorenzo Vignolo" />
          <meta name="description" content={`info about Marvel Heros`} />
          <meta name="keywords" content={`marvel, heros`} />
          <meta name="robots" content="index, follow" />
          <meta name="googlebot" content="index, follow" />
          <link rel="icon" href="/favicon.ico" />

          <meta property="og:title" content="Marvel Heros" />
          <meta
            property="og:description"
            content="A web where you can find Heros from Marvel"
          />
          <meta property="og:image" content={`${origin}/pictures/meta.png`} />
        </Head>

        <MainNavigation toggleDarkMode={toggleDarkMode} />
        <main className={darkMode ? 'dark' : 'light'}>{children}</main>
        <Footer />
      </Fragment>
    </>
  );
};

export default Layout;
