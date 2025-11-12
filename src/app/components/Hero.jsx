export default function Hero({ title }) {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img12.jpg')",
        }}

      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl">
          {/* Orange Border Accent */}
          <div className="border-l-4 border-orange-500 pl-6">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-orange-400 text-xl md:text-2xl font-medium tracking-wider">
              EXPLORE
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Element - Optional */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-transparent"></div>
    </div>
  );
}