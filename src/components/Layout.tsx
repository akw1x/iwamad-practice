import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="app">
      <Header title="User Profile" />
      <main>
        <Outlet />
      </main>
      <Footer text="© 2026 Adel" />
    </div>
  );
}