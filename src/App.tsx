import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const mySkills = [
    { id: 1, name: 'HTML / CSS' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'C++' }
  ];

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage skills={mySkills} />} />
        <Route path="skills" element={<SkillsPage skills={mySkills} />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;