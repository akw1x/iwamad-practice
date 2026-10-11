import { NavLink } from 'react-router';
import logo from '../assets/logo.svg'; 

type HeaderProps = {
  title: string;
};

export function Header(props: HeaderProps) {

  return (
    <header className="header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={logo} alt="" width={32} height={32} />
        <h1>{props.title}</h1>
      </div>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Home
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Skills
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}