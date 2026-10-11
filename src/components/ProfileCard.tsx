import { Card } from './ui/Card';
import { Tag } from './ui/Tag';

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
  return (
    <Card>
      <div className="profile-card" style={{ border: 'none', padding: 0 }}>
        <img src={props.avatarUrl} alt={props.name} className="avatar" />
        <h2>{props.name}</h2>
        <p className="role">{props.role}</p>
        <p className="description">{props.description}</p>

        <div className="skills-section">
          <h3>Skills</h3>
          
          {props.skills.length === 0 && <p>No skills added yet</p>}

          {props.skills.length > 0 && (
            <div className="skills-list" style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {props.skills.map((skill) => (
                <Tag key={skill.id} label={skill.name} />
              ))}
            </div>
          )}
        </div>

        <div className="links" style={{ margin: '16px 0', display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <a href={`mailto:${props.email}`}>Email</a>
          <a href={props.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </Card>
  );
}