export default function Hero() {
  const slides = [
    {
      image: '/images/generated/castle-town.webp',
      animation: 'hero-slide1',
    },
    { image: '/images/generated/robot-city.webp', animation: 'hero-slide2' },
    {
      image: '/images/generated/enchanted-forest.webp',
      animation: 'hero-slide3',
    },
    {
      image: '/images/generated/ancient-asian-city.webp',
      animation: 'hero-slide4',
    },
    {
      image: '/images/generated/underwater-city.webp',
      animation: 'hero-slide5',
    },
  ]

  const slideStyle = 'absolute inset-0 bg-cover bg-center opacity-0 hero-slide'

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${slideStyle} ${slide.animation}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          ></div>
        ))}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg">
          Big Ideas, Little Minds
        </h1>
        <p className="text-gray-200 text-md md:text-xl lg:text-3xl max-w-[300px] md:max-w-[400px] lg:max-w-[600px] pt-2 md:pt-4 drop-shadow-md">
          Timeless lessons through imaginative narratives for children.
        </p>
      </div>

      {/* Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-5"></div>
    </div>
  )
}
