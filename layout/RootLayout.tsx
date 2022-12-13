import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <div className="container">
      {/* nav bar */}
      <NavBar />

      {/* contents */}
      {children}

      {/* footer */}
      <Footer />
      <style jsx>{`
        .container {
        }
      `}</style>
    </div>
  );
}
