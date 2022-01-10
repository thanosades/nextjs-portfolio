export default function About() {
  return (
    <article id="about" className="about w-screen">
      <section className="w-screen text-center text-xl flex flex-col justify-start items-center">
        <h3 className="text-5xl">About Me<br /> <span className="text-xl"> (aka. &#34;the elevator pitch&#34;)</span></h3>
        <div className="text-lg flex flex-col justify-evenly mt-4 w-1/2 gap-8">
          <p>I used to work in IT, wait tables, be a theme park cashier, and more. Found love in Zachtronics games. When I lost my job
            during COVID lockdown I decided to learn how to program, starting from CS basics, and work my way up. I&#39;ve had enough fun to
            take the brave decision and make it my career.
          </p>
          <p>
            I started as a frontend, but I&#39;m also expanding into backend territory. My favorite languages (so far) are TypeScript, Java and C#.
          </p>
        </div>
      </section>
    </article>
  );
}
