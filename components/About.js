export default function About() {
  return (
    <article id="about" className="about w-screen">
      <section className="w-screen text-center text-xl flex flex-col justify-start items-center">
        <h3 className="text-5xl">About Me<br /> <span className="text-xl"> (aka. &#34;the elevator pitch&#34;)</span></h3>
        <div className="text-lg flex flex-col justify-evenly mt-4 w-1/2 gap-8">
        <p>
          I&#39;m a frontend developer who also dabbles with backend.          
          My journey began when a friend gifted me a programming puzzle game. 
          Now I code full-time.</p>
          <p>My favorite stack is React with TypeScript and SCSS for the frontend, and Python for the backend.</p>
          <p>I enjoy both solving problems, optimizing for performance (as long as it&#39;s not done prematurely) and building software.</p>
        </div>
      </section>
    </article>
  );
}
