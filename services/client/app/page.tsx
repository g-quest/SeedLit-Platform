import HomeHero from '@/components/home/Hero'
import HomeIntroduction from '@/components/home/Introduction'
import HomeFeatures from '@/components/home/Features'
import HomeStorytelling from '@/components/home/Storytelling'
import HomeCompanionApp from '@/components/home/CompanionApp'
import HomeParentsHub from '@/components/home/ParentsHub'
import HomeNewsletter from '@/components/home/Newsletter'

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeIntroduction />
      <HomeFeatures />
      <HomeStorytelling />
      <HomeParentsHub />
      <HomeCompanionApp />
      <HomeNewsletter />
    </div>
  )
}
