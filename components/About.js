export default function About() {
  return (
    <article id="about" className="about w-screen">
      <section className="w-screen text-center text-xl flex flex-col justify-start items-center">
        <h3 className="text-5xl">About Me (aka. elevator pitch)</h3>
        <div className="text-lg flex flex-col justify-evenly mt-4 w-1/2 gap-8">
          <p>
            Last year I lost my job due to covid. During lockdown, a friend gifted me a programming game.</p>
          <p>It was love at first line.</p>
          <p>
            Now I&#39;m a software developer who&#39;s passionate about coding and addicted to learning.
            I enjoy working with JavaScript, TypeScript, React and Node. I&#39;m also currently learning Java following best practices for
            proper software construction, and I&#39;m planning to pick up Spring Boot next.
          </p>
        </div>
      </section>
    </article>
  );
}
