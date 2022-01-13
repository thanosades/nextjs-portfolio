export default function About() {
  return (
    <article id="about" className="about w-screen">
      <section className="w-screen text-center text-xl flex flex-col justify-start items-center">
        <h3 className="text-5xl">About Me<br /> <span className="text-xl"> (aka. &#34;the elevator pitch&#34;)</span></h3>
        <div className="text-lg flex flex-col justify-evenly mt-4 w-1/2 gap-8">
          <p>
            I used to work in IT. Found love in Zachtronics games (puzzle games that facilitate coding for optimization problems),
            which I enjoyed enough to decide to learn how to program from scratch.
          </p>
          <p>Today I&#39;m developing software using some of the skills listed below. So far I enjoy both frontend and backend,
            but I would prefer to stick with only one of them. Maybe one day...
          </p>
        </div>
      </section>
    </article>
  );
}
