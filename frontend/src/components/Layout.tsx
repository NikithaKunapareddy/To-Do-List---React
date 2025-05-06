import React from 'react';
import '../App.css'; // Corrected import path

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      minHeight: '100vh',
      backgroundImage: "url('/background.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch', // full width
      justifyContent: 'flex-start',
      padding: '2rem 0',
    }}
  >
    {children}
  </div>
);

export default Layout;