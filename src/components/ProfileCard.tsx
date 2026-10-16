import { useState } from 'react';

type Skill = {
  id: number;
  name: string;
};

type ProfileCardProps = {
  name: string;
  role: string;
  description: string;
  avatarUrl: string;
  email: string;
  githubUrl: string;
  skills: Skill[];
};

export function ProfileCard(props: ProfileCardProps) {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div className="profile-card">
      <img src={props.avatarUrl} alt={props.name} className="avatar" />
      <h2>{props.name}</h2>
      <p className="role">{props.role}</p>
      <p className="description">{props.description}</p>

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
        <a href={`mailto:${props.email}`}>Email</a>
        <a href={props.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>

      <button onClick={handleLike} className="like-btn">
        ❤️ Likes: {likes}
      </button>
    </div>
  );
}