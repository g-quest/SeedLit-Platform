import Image from 'next/image'

export default function HomeStorytelling() {
  return (
    <div className=" bg-white relative flex flex-col md:flex-row w-full h-auto min-h-screen">
      {/* Left Side: Sticky Image (Only Sticky on Desktop) */}
      <div className="w-full md:w-1/2 md:h-screen sticky md:top-0 flex items-center justify-center bg-gray-100">
        <Image
          src="/images/generated/castle-market.webp"
          alt="Storytelling Illustration"
          className="w-full h-auto md:h-full object-cover"
          width={2000}
          height={2000}
        />
      </div>

      {/* Right Side: Scrolling Text (Full View on Mobile) */}
      <div className="w-full md:w-1/2 px-6 md:px-8 py-12 md:py-16 space-y-8  flex flex-col justify-center items-center">
        <div className="max-w-[500px]">
          <h2 className="mb-5 lg:mb-10 text-center">
            Transforming Big Ideas into Magical Stories
          </h2>
          <p className="text-lg text-gray-700 mb-5 lg:mb-10 text-center">
            SeedLit transforms impactful lessons into imaginative,
            age-appropriate stories for children. These stories are designed to
            nurture curiosity, resilience, and empathy, making complex ideas
            approachable and fun for young minds.
          </p>

          {/* Key Points */}
          <div className="space-y-12">
            <div>
              <h3 className="mb-5 text-center text-tertiary">
                Multi-Source Inspiration
              </h3>
              <div>
                <ul className="list-disc text-lg">
                  <li>
                    <p>
                      <strong>Impactful Adult Literature:</strong> SeedLit
                      adapts complex ideas from carefully selected adult books
                      into imaginative stories children can relate to.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Parent Experiences:</strong> Stories inspired by
                      real-world parenting insights shared through the Parent
                      Insights Hub.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Original Concepts:</strong> Whimsical and creative
                      tales crafted to teach timeless lessons, like kindness,
                      problem-solving, and perseverance.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-center text-tertiary">
                Engaging & Relatable
              </h3>
              <div>
                <p className="text-lg text-center">
                  Every story is written to captivate children while providing
                  discussion prompts and context for parents, helping them guide
                  meaningful conversations.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-center text-tertiary">
                Playful & Accessible
              </h3>
              <div>
                <p className="text-lg text-center">
                  Big ideas are presented in ways that resonate with children's
                  experiences, sparking their natural curiosity and sense of
                  wonder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
