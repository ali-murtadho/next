import Navbar from '../navbar/Navbar';
import Footer from '../footer';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
