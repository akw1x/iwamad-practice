// @ts-ignore
import avatarImg from '../assets/IMG_3804.JPG';
import { ProfileCard, Skill } from '../components/ProfileCard';

type HomePageProps = {
  skills: Skill[];
};

export function HomePage({ skills }: HomePageProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px 0' }}>
      <ProfileCard
        name="Adel"
        role="3rd Year Student"
        description="3rd-year student learning the basics of web development."
        avatarUrl={avatarImg}
        email="a_kikbay@kbtu.kz"
        githubUrl="https://github.com"
        skills={skills}
      />
    </div>
  );
}