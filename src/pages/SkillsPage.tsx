type Skill = {
    id: number;
    name: string;
  };
  
  type SkillsPageProps = {
    skills: Skill[];
  };
  
  export function SkillsPage(props: SkillsPageProps) {
    return (
      <div className="page-container">
        <h2>My Skills</h2>
        {props.skills.length === 0 && <p>No skills added yet</p>}
        {props.skills.length > 0 && (
          <ul className="skills-list">
            {props.skills.map((skill) => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }