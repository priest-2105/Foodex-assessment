
import { ReactNode } from 'react'; 


interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen "> 
      <main className="rounded-[0.875rem]">
       {children}
      </main>
     </div>
  );
};

export default Layout;
