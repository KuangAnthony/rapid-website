import Header from './Header';
import Footer from './Footer';
import CallToAction from './CallToAction';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <CallToAction />
      <Footer />
    </>
  );
}
