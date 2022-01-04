export default function About() {
  return (
    <article id="about" className="about w-screen">
      <section className="w-screen text-center text-xl flex flex-col justify-start items-center">
        <h3 className="text-5xl">About Me</h3>
        <div className="text-lg flex flex-col justify-evenly mt-4 w-1/2 gap-8">
          <p>
            When I lost my job last year due to Covid lockdown a friend gifted me a game called <a href="https://store.steampowered.com/app/504210/SHENZHEN_IO/">SHENZHEN I/O</a>, an open-ended programming puzzle
            created by Zachtronics. Little did she know that this will spark an interest in programming, the interest will turn into passion, and will lead me down towards the self-taught path of software development.
          </p>
          <p>
            Today I&#39;m a junior web developer. So far I&#39;ve learned C and CS101, built simple web pages using HTML, CSS and JavaScript on <a href="https://www.theodinproject.com/">The Odin Project</a>.
            Attended <a href="https://fullstackopen.com/en/">Full Stack Open</a> where I learned React Hooks, Node.js, Redux, MongoDB and TypeScript.
          </p>
          <p>
            Tomorrow? Who knows. The only thing I know is that I&#39;ll wake up, grab a cup of coffee and get studying and coding.
            It feels like I&#39;m strapped on a rocket boosting towards something I should have done a long time ago:<br /> Find my passion and go after it.
          </p>
        </div>
      </section>
    </article>
  );
}
