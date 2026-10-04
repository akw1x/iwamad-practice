import { LikeButton } from '../components/LikeButton';

type Skill = {
  id: number;
  name: string;
};

type HomePageProps = {
  skills: Skill[];
};

export function HomePage(props: HomePageProps) {
  return (
    <div className="profile-card">
      <img src="./IMG_3804.JPG" alt="Adel" className="avatar" />
      <h2>Adel</h2>
      <p className="role">3rd Year Student</p>
      <p className="description">3rd-year student learning the basics of web development.</p>

      <div className="skills-section">
        <h3>Skills</h3>
        {props.skills.length === 0 && <p>No skills added yet</p>}
        {props.skills.length > 0 && (
          <ul className="skills-list">
            {props.skills.map((skill) => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="links">
        <a href="mailto:a_kikbay@kbtu.kz">Email</a>
        <a href="https://github.com/akw1x" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <LikeButton />
    </div>
  );
}