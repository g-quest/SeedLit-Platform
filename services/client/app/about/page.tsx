import { Card, CardContent } from '@/components/core-ui/card'
import Image from 'next/image'
export default function AboutPage() {
  return (
    <div className="mx-auto pt-[8rem] md:pt-[10rem]">
      {/* <div className="relative w-full overflow-hidden h-96 md:h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videos/parents.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center mt-8 md:mt-0">
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg">
            Made for Parents,
          </h1>
          <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg">
            by Parents
          </h1>
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>
      </div> */}

      <div className="max-w-4xl mx-auto px-6 pb-12">
        <Card className="mb-8 bg-white">
          <CardContent className="p-6">
            <h2 className="text-tertiary text-2xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At SeedLit, our mission is to
              <strong>
                {' '}
                transform big ideas into imaginative, age-appropriate narratives{' '}
              </strong>
              that weave meaningful lessons into every story. We aim to inspire
              young minds while fostering curiosity, resilience, and
              leadership—equipping both children and parents with tools that
              carry through their journey together.
            </p>
          </CardContent>
        </Card>

        {/* <Card className="mb-8 bg-white">
          <CardContent className="p-6">
            <div className="md:grid md:grid-cols-2 md:items-center md:justify-center gap-8">
              <Image
                src="/images/generated/fam-4.webp"
                alt="About"
                width={500}
                height={500}
                className="w-full mb-4 md:mb-0 rounded-lg"
              />
              <div>
                <h2 className="text-tertiary text-2xl font-semibold mb-4">
                  How It Started
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  SeedLit was born from a moment of reflection—one that many new
                  parents experience. As my wife and I prepared to welcome our
                  first child, I found myself thinking about the lessons I
                  wished I had learned earlier in life. I've always turned to
                  books for guidance, but what if we could introduce{' '}
                  <strong>big ideas</strong> to children in a way that was
                  engaging, imaginative, and meaningful from the start?
                </p>
                <p className="mt-4 text-gray-700">
                  That thought sparked the beginning of SeedLit. Many of us
                  weren't handed a roadmap for concepts like resilience,
                  creativity, or emotional intelligence. Instead, we stumbled
                  upon these lessons in our 20s or 30s, often through trial and
                  error. <strong>SeedLit was created to change that</strong>—to
                  give kids (and their parents) access to{' '}
                  <strong>timeless wisdom</strong> through beautifully crafted
                  stories that plant seeds of knowledge and curiosity.
                </p>
              </div>
            </div>
          </CardContent>
        </Card> */}

        <Card className="mb-8 bg-white">
          <CardContent className="p-6">
            <h2 className="text-tertiary text-2xl font-semibold mb-4">
              Aiming to Build a Community
            </h2>
            <p className="text-gray-700 leading-relaxed">
              What started as a simple idea—creating children's books based on
              big ideas from adult books—quickly evolved into something more. We
              realized that it wasn't just about the stories themselves but
              about the <strong>conversations they sparked</strong> and the{' '}
              <strong>connections they fostered</strong> between parents and
              children.
            </p>
            <p className="mt-4 text-gray-700">
              That's when SeedLit became more than just books. It's a{' '}
              <strong>community</strong> for parents who, like me, want to be
              intentional about raising thoughtful, curious, and resilient kids.
              A place where we can share insights, ideas, and support as we
              navigate parenthood together.
            </p>
            <p className="mt-4 text-gray-700">
              At SeedLit, we believe that learning isn't a one-way street.
              Parents and children grow <strong>together</strong>, and our goal
              is to create resources, discussions, and stories that support that
              journey—helping to plant seeds of wisdom that will flourish for
              years to come.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4 md:mb-8 bg-white">
          <CardContent className="p-6">
            <h2 className="text-tertiary text-2xl font-semibold mb-4">
              {' '}
              🌱 What's in a Name?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The name <strong>SeedLit</strong> is a fusion of multiple ideas:
            </p>
            <ul className="list-disc list-outside ml-6 md:ml-10 mt-4 space-y-2 text-gray-700">
              <li>
                <strong>"Seed"</strong> represents planting ideas, knowledge,
                and curiosity in young minds, just as we nurture seeds to grow
                into something strong and lasting.
              </li>
              <li>
                <strong>"Lit"</strong> is a nod to literature, storytelling, and
                illumination—sparking curiosity and igniting the imagination.
              </li>
              <li>
                <strong>It's also a play on "seedlet,"</strong> which refers to
                a tiny seedling—small, but full of potential. Just like the
                stories we create, seedlets hold the promise of something
                greater, ready to grow with the right care and nurturing.
              </li>
            </ul>
            <p className="mt-4 text-gray-700">
              Together, <strong>SeedLit</strong> represents our belief that
              stories have the power to{' '}
              <strong>plant ideas that grow for a lifetime</strong>—not just for
              children, but for the entire family.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
