export default function About() {
  return (
    <article id="about" className="about w-screen">
      <section className="w-screen text-center text-xl flex flex-col justify-start items-center">
        <h3 className="text-5xl">About Me<br /> <span className="text-xl"> (aka. &#34;the elevator pitch&#34;)</span></h3>
        <div className="text-lg flex flex-col justify-evenly mt-4 w-1/2 gap-8">
        <p>
          I&#39;m a frontend developer who dabbles with backend.          
          It all started when a friend gifted me a programming puzzle game. 
          Now I code full-time.</p>
          <p>My favorite combo so far are React + TypeScript + Python + Django/Flask.</p>
          <p>I enjoy both solving problems, optimizing (not prematurely) and building software.</p>
        </div>
      </section>
    </article>
  );
}
