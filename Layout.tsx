import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <PageTransition>
        <main>{children}</main>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Layout;
