import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../components/AppBar/AppBar';
import { Suspense } from 'react';
import { LayoutSection } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutSection>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </LayoutSection>
  );
};
