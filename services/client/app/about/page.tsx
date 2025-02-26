import { Card, CardContent } from '@/components/core-ui/card'
import Image from 'next/image'
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
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
            leadership—equipping both children and parents with tools that carry
            through their journey together.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-white">
        <CardContent className="p-6">
          <h2 className="text-tertiary text-2xl font-semibold mb-4">
            Aiming to Build a Community
          </h2>
          <p className="text-gray-700 leading-relaxed">
            What started as a simple idea—creating children's books based on big
            ideas from adult books—quickly evolved into something more. We
            realized that it wasn't just about the stories themselves but about
            the <strong>conversations they sparked</strong> and the{' '}
            <strong>connections they fostered</strong> between parents and
            children.
          </p>
          <p className="mt-4 text-gray-700">
            That's when SeedLit became more than just books. It's a{' '}
            <strong>community</strong> for parents who, like me, want to be
            intentional about raising thoughtful, curious, and resilient kids. A
            place where we can share insights, ideas, and support as we navigate
            parenthood together.
          </p>
          <p className="mt-4 text-gray-700">
            At SeedLit, we believe that learning isn't a one-way street. Parents
            and children grow <strong>together</strong>, and our goal is to
            create resources, discussions, and stories that support that
            journey—helping to plant seeds of wisdom that will flourish for
            years to come.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white">
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
              <strong>"Seed"</strong> represents planting ideas, knowledge, and
              curiosity in young minds, just as we nurture seeds to grow into
              something strong and lasting.
            </li>
            <li>
              <strong>"Lit"</strong> is a nod to literature, storytelling, and
              illumination—sparking curiosity and igniting the imagination.
            </li>
            <li>
              <strong>It's also a play on "seedlet,"</strong> which refers to a
              tiny seedling—small, but full of potential. Just like the stories
              we create, seedlets hold the promise of something greater, ready
              to grow with the right care and nurturing.
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
  )
}
