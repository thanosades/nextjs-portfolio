export default function Hero({ scrollToMission }) {
  return (
    <div className="h-screen w-screen bg-hero-pattern bg-cover bg-center">
      <div className="h-screen w-screen flex flex-col justify-center items-center gap-4 bg-black bg-opacity-50 text-white">
        <h1 className="text-5xl md:text-8xl text-center">Thanos Dimitriades</h1>
        <h3 className="text-4xl md:text-6xl text-center">Web Developer</h3>
        <button onClick={scrollToMission} className="text-xl transition-colors duration-500 ease-in-out bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 mt-10 rounded w-auto">My Mission</button>
      </div>
    </div>
  );
}
