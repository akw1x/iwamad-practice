import { NavLink } from 'react-router';
import { useLikes } from '../context/LikesContext';

type HeaderProps = {
  title: string;
};

export function Header(props: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header className="header">
      <h1>{props.title}</h1>
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
      <div className="header-likes">Likes count: {likes}</div>
    </header>
  );
}