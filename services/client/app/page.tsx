import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-4">
      <div>
        <div className="flex justify-center">
          <Image
            src="/images/seedlit-icon.png"
            alt="SeedLit"
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-primary">SeedLit</h1>
        <p>Planting Seeds for Lifelong Learning through Storytelling</p>
      </div>
    </div>
  )
}
