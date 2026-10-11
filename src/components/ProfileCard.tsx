import { useState } from 'react';
import { Card } from './ui/Card';
import { Tag } from './ui/Tag';
import { Button } from './ui/Button';

export type Skill = {
  id: number | string;
  name: string;
  level?: string;
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
    <Card>
      <img src={props.avatarUrl} alt={props.name} className="avatar" />
      <h2>{props.name}</h2>
      <p className="role">{props.role}</p>
      <p className="description">{props.description}</p>

      <div className="skills-section">
        <h3>Skills</h3>
        
        {props.skills.length === 0 && <p>No skills added yet</p>}

        {props.skills.length > 0 && (
          <ul className="skills-list" style={{ display: 'flex', gap: '8px', listStyle: 'none', padding: 0 }}>
            {props.skills.map((skill) => (
              <li key={skill.id}>
                <Tag label={skill.name} />
              </li>
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

      <Button
        variant="secondary"
        onClick={handleLike}
        aria-label={`Like (${likes} likes)`}
      >
        ❤️ Likes: {likes}
      </Button>
    </Card>
  );
}