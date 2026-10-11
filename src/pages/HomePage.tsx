import { ProfileCard } from '../components/ProfileCard'

type Skill = {
  id: number
  name: string
}

type HomePageProps = {
  skills: Skill[]
}

export function HomePage({ skills }: HomePageProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '20px 0' }}>
      <ProfileCard
        name="Adel"
        role="3rd Year Student"
        description="3rd-year student learning the basics of web development."
        avatarUrl="/IMG_3804.JPG"
        email="a_kikbay@kbtu.kz"
        githubUrl="https://github.com"
        skills={skills}
      />
    </div>
  )
}