import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <div className="container">
      {/* nav bar */}
      <NavBar />
      {/* contents */}
      <main
        className={styles.main}
        style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
      >
        {children}
      </main>
      {/* footer */}
      <Footer />
      <style jsx>{`
        .container {
          position: relative;
          background-color: red;
          z-index: 5;
          background-image: url('/dev_code_1920.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </div>
  );
}
