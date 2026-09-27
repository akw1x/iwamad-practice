import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { Footer } from './components/Footer';
import './style.css';

export function App() {
  const mySkills = [
    { id: 1, name: 'HTML / CSS' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'C++' }
  ];

  return (
    <div className="app">
      <Header title="User Profile" />
      <main>
        <ProfileCard
          name="Adel"
          role="3rd Year Student"
          description="3rd-year student learning the basics of web development."
          avatarUrl="./IMG_3804.JPG"
          email="a_kikbay@kbtu.kz"
          githubUrl="https://github.com/akw1x"
          skills={mySkills}
        />
      </main>
      <Footer text="© 2026 Adel" />
    </div>
  );
}

export default App;