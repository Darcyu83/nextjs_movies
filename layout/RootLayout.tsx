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
      <main className={styles.main}>{children}</main>

      {/* footer */}
      <Footer />
      <style jsx>{`
        .container {
        }
      `}</style>
    </div>
  );
}
