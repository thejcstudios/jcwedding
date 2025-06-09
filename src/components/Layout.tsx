// src/components/Layout.tsx
import React from 'react';
import '../assets/styles/Layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className="app-container">{children}</div>;
};

export default Layout;
