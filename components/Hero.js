/*
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("photographer.jpg");
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}


<p>Page Content..</p>
*/

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
