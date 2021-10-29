export default function Hero() {
  return (
    <div className="h-screen w-screen bg-hero-pattern bg-cover bg-center">
      <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 bg-black bg-opacity-50 text-white">
        <h1 className="text-5xl md:text-8xl text-center">Thanos Dimitriades</h1>
        <h2 className="text-4xl md:text-6xl text-center">Web Developer</h2>
      </div>
    </div>
  );
}
