import Image from 'next/image';
import React from 'react';

const FourOhFour = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'cener',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ fontSize: '5rem' }}>404</h1>
      <h4 style={{ fontSize: '3rem', color: 'white' }}>Page not found</h4>
      <Image src="/pictures/404.png" alt="404" width={500} height={700} />
    </div>
  );
};

export default FourOhFour;
