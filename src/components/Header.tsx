import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';
import logo from '../assets/logo.svg';

type HeaderProps = {
  title: string;
};

export function Header(props: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '16px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img src={logo} alt="Logo" width={32} height={32} />
        <h1 style={{ margin: 0 }}>{props.title}</h1>
      </div>

      <nav className="nav" style={{ display: 'flex', gap: '16px' }}>
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

      <div className="header-likes" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
        Likes count: {likes}
      </div>
    </header>
  );
}