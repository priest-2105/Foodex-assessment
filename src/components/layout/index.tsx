import { ReactNode } from 'react';
import { Navigation } from '../home/navigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen ">
      <Navigation />
      <main className="ml-64 rounded-[0.875rem] p-8">
       {children}
      </main>
    </div>
  );
};

export default Layout;
